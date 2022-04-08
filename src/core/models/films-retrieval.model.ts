import { IFilmsModel } from "./films.model";

export interface IFilmsRetrievalModel {
    count: number;
    next: string;
    previous: string;
    results: Array<IFilmsModel>;

    created: Date;
    edited: Date;
    url: string;
}
