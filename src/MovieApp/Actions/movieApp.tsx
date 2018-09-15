export const MOVIEDETAILS = 'MOVIEDETAILS';
export type MOVIEDETAILS = typeof MOVIEDETAILS;
export const MOVIEDETAILS_SUCCESS = 'MOVIEDETAILS_SUCCESS';
export type MOVIEDETAILS_SUCCESS = typeof MOVIEDETAILS_SUCCESS;
export const MOVIEDETAILS_FAILURE = 'MOVIEDETAILS_FAILURE';
export type MOVIEDETAILS_FAILURE = typeof MOVIEDETAILS_FAILURE;

export interface MovieDetails {
    type: MOVIEDETAILS;
}
export type MovieDetailsActions = MovieDetails;
export default class MovieActions {
    public static MovieDetails(): MovieDetails {
        return {
            type: MOVIEDETAILS
        };
    }
}