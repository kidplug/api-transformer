//Dependencies
import React from "react";
import {connect} from "react-redux";

//Actions
import {search} from "../actions/searchActions";

class HomePage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            original : '',
            transformed: '',
            error: ''
        };

        this.search = this.search.bind(this);
    }

    search(type) {
        this.props.search(type).then( response => {
            this.setState({
                original: JSON.stringify(response.data.original, null, 2),
                transformed: JSON.stringify(response.data.transformed, null, 2)
            });
        }, error => {
            const {data} = error.response;
            this.setState({
               error: data.error
            });
        });
    }

    render() {

        let error = '';
        if(this.state.error) {
            error = (
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-md-offset-4 error-message">
                            {this.state.error}
                        </div>
                    </div>
                </div>
            )
        }

        return (
            <div id="homePage">
                <div className="container-fluid homePage-overlay">
                    <div className="row">
                        { this.state.error ? error : ''}
                        <div className="container">
                            <div className="col-md-4 buttons">
                                <div className="col-md-5 btn btn-primary" onClick={() => this.search("people")}>
                                    People
                                </div>
                                <div className="col-md-5 col-md-offset-1 btn btn-primary" onClick={() => this.search("starships")}>
                                    Starships
                                </div>
                            </div>
                        </div>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-8 col-md-offset-2">
                                    <div className="col-md-6">
                                        <div className="output-label">
                                            Original Payload
                                        </div>

                                        <div><pre>{this.state.original}</pre></div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="output-label">
                                            Transformed Payload
                                        </div>
                                        <div><pre>{this.state.transformed}</pre></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default connect(() => {return {}}, { search })(HomePage);
