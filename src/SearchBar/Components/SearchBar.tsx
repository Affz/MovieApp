import * as React from 'react';
import { SearchBarState } from '../State/SearchBarState';
import { Loader } from '../../Utils/Loader/loader';

export interface Props {
    searchData: SearchBarState[];
    getsearchDetails: (query: string) => void;
    searchloader: boolean;
}
export interface State {
    query: string;
}
export default class Searchbar extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            query: ''
        };
    }

    render() {
        var { searchData, searchloader } = this.props;
        var renderinfo;
        var isfetching = searchData;
        console.log(searchloader);
        if (!searchloader && isfetching) {
            renderinfo = (
                <div>
                    <Loader />
                </div>

            );
        } else {
            if (searchData.length > 0) {
                renderinfo = (
                    <div>
                        <div>
                            {searchData.length > 0 &&
                                <div>
                                    {searchData.map((res, i) =>
                                        <>
                                            <div>{res.title}</div><br />
                                        </>)}
                                </div>

                            }
                        </div>
                    </div>
                );
            } else {
                renderinfo = (
                    <div>
                        No data
                    </div>
                );

            }
        }
        return (
            <div>
                <input type="text" onChange={(e) => this.setState({ query: e.currentTarget.value })} />
                <button onClick={() => this.props.getsearchDetails(this.state.query)}>Search</button>
                {renderinfo}
            </div>
        );
    }
}