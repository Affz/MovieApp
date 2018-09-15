import * as React from 'react';
import { MovieAppState } from '../State/MovieApp';
export interface Props {
    details: MovieAppState[];
    MovieDetails: () => void;

}
export interface State {

}
export default class MovieApp extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }
    componentDidMount() {
        this.props.MovieDetails();
    }

    render() {
        console.log('details is', this.props.details);
        var { details } = this.props;
        return (
            <div>
                {details.map((item, i) =>
                    <div key={i}>
                        <label>ID:</label>
                        <label>{item.id}</label>
                        <label>Title:</label>
                        <label>{item.title}</label>
                    </div>

                )}
            </div>
        );
    }
}