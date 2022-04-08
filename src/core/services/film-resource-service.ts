import { IFilmDetailModel } from "../models/film-detail.model";
import { IFilmsRetrievalModel } from "../models/films-retrieval.model";
import ConnectionAPI from "./connection-apis";

export default class CustomerResourceService {
    public static async filmSearch(
        searchTerm: string
    ): Promise<IFilmsRetrievalModel> {
        try {
            const response = await fetch(
                `${ConnectionAPI.API_URL}films/?search=${searchTerm}`
            );
            return response.json();
        } catch (error: any) {
            if (error && error.error instanceof ProgressEvent) {
                throw new Error(
                    "A connection could not be established. Please contact an administrator."
                );
            }
            throw Error(error.error);
        }
    }

    public static async singleFilm(filmId: number): Promise<IFilmDetailModel> {
        try {
            const response = await fetch(`${ConnectionAPI.API_URL}films/${filmId}`);
            return response.json();
        } catch (error: any) {
            if (error && error.error instanceof ProgressEvent) {
                throw new Error(
                    "A connection could not be established. Please contact an administrator."
                );
            }
            throw Error(error.error);
        }
    }
}
