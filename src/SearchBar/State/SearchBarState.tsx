export default interface SearchState {
    searchData: SearchBarState[];
    searchloader: boolean;
}
export interface SearchBarState {
    id: number;
    title: string;
    file_id: string;
}