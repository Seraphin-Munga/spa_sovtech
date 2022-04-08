import { ActionTypeEnum } from "../../core/models/action-type";
import { IFilmDetailModel } from "../../core/models/film-detail.model";
import { IFilmsRetrievalModel } from "../../core/models/films-retrieval.model";

export const addFilm = (filmModel: IFilmsRetrievalModel) => {
    return (dispatch: any) => {
        dispatch({
            type: ActionTypeEnum.ADD,
            payload: filmModel,
        });
    };
};

export const emptyCard = () => {
    return (dispatch: any) => {
        dispatch({
            type: ActionTypeEnum.REMOVE,
        });
    };
}