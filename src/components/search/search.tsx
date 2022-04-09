import * as React from 'react'
import Box from '@mui/material/Box'
import { useHistory } from 'react-router-dom'
import CustomerResourceService from '../../core/services/film-resource-service'
import { actionCreators } from '../../state'
import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'
import Autocomplete from '@mui/material/Autocomplete'
import '../search/search.scss'
import { useRef, useState } from 'react'
import { useEffect } from 'react'

const _customerResourceService = CustomerResourceService
let historySearch: Array<string> = []
export default function SearchFilm() {
  const dispatch = useDispatch()
  const [getSearchhistory, setSearchhistory] = useState<Array<string>>([])
  const [getSearch, setSearch] = useState<string>('')
  const { addFilm } = bindActionCreators(actionCreators, dispatch)
  const exampleInput = useRef()
  const history = useHistory()

  async function btnSearch(): Promise<void> {
    let splitHistory = localStorage.getItem('history')?.split(',') || []
    const historyExist = splitHistory.filter(
      (searchTerm) => searchTerm === getSearch,
    )
    if (historyExist.length === 0) {
      historySearch = splitHistory

      historySearch.push(getSearch)
      localStorage.setItem('history', historySearch.toString())
    }
    const filmsData = await _customerResourceService.filmSearch(getSearch)
    addFilm(filmsData)
    history.push(`/films/${getSearch}`)
  }

  function handleBlur(e: any): void {
    setSearch(e.target.value)
  }

  function onChangeSearch(e: any): void {
    setSearch(e.target.textContent)
  }

  setTimeout(clearLocalStorage, 1000000)

  function clearLocalStorage(): void {
    localStorage.clear()
  }

  useEffect(() => {
    const splitHistory = localStorage.getItem('history')?.split(',') || []
    setSearchhistory(splitHistory)
  }, [getSearch])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Autocomplete
        freeSolo
        onInput={handleBlur}
        onChange={onChangeSearch}
        className="search"
        id="custom-input-demo"
        options={getSearchhistory}
        renderInput={(params) => (
          <div ref={params.InputProps.ref}>
            <input placeholder="Search..." type="text" {...params.inputProps} />
            <button onClick={btnSearch} className="btn-search">
              Search
            </button>
          </div>
        )}
      />
    </Box>
  )
}
