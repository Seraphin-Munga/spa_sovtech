import { ActionTypeEnum } from "../../core/models/action-type";
import { IFilmsRetrievalModel } from "../../core/models/films-retrieval.model";

const filmReducer = (
    filmState: IFilmsRetrievalModel,
    action: any
) => {
    debugger
    switch (action.type) {
        case ActionTypeEnum.ADD:
            const model = action.payload;
            return model;
        case ActionTypeEnum.REMOVE:
            return filmState;
        default:
            return null;
    }
};

export default filmReducer;
