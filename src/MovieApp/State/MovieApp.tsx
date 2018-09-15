export default interface MovieAppParentState {
    details: MovieAppState[];
}
export interface MovieAppState {
    id: number;
    title: string;
    description: string;
    producer: string;
}