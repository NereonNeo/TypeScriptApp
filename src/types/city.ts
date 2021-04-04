export interface cityState {
    city:Array<string>;
}
export enum cityActionTypes {
    FILTER_CITY= 'FILTER_CITY'
}
interface filteringCityes {
    type:cityActionTypes.FILTER_CITY,
    payload:Array<string>
}
export type cityAction = filteringCityes