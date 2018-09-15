export const SEARCHDETAILS = 'SEARCHDETAILS';
export type SEARCHDETAILS = typeof SEARCHDETAILS;
export const SEARCHDETAILS_SUCCESS = 'SEARCHDETAILS_SUCCESS';
export type SEARCHDETAILS_SUCCESS = typeof SEARCHDETAILS_SUCCESS;
export const SEARCHDETAILS_FAILURE = 'SEARCHDETAILS_FAILURE';
export type SEARCHDETAILS_FAILURE = typeof SEARCHDETAILS_FAILURE;

export interface GetSearchDetails {
    type: SEARCHDETAILS;
    query: string;
}
export type SearchDetailsActionsCombine = GetSearchDetails;
export default class SearchDetailsActions {
    public static getSearchDetails(query: string): GetSearchDetails {
        return {
            type: SEARCHDETAILS,
            query: query
        };
    }
}