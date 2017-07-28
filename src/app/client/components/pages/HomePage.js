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
                <div className="row error-wrapper">
                    <div className="col-md-4 col-md-offset-4 error-message">
                        {this.state.error}
                    </div>
                </div>
            )
        }

        return (
            <div id="homePage">
                <div className="homePage-overlay">
                    <div className="container">
                        { this.state.error && error ? error : ''}
                        <div className="row buttons-wrapper">
                            <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 buttons">
                                <div className="col-md-6 button-wrapper">
                                    <div className="btn btn-primary" onClick={() => this.search("people")}>
                                        People
                                    </div>
                                </div>
                                <div className="col-md-6 button-wrapper">
                                    <div className="btn btn-primary" onClick={() => this.search("starships")}>
                                        Starships
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row output-wrapper">
                            <div className="col-md-10 col-md-offset-1">
                                <div className="col-md-6 col-xs-12 output-inner-wrapper">
                                    <div className="output-label">
                                        Original Payload
                                    </div>
                                    <div className="output-body">
                                        <pre>
                                            {this.state.original}
                                        </pre>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xs-12 output-inner-wrapper">
                                    <div className="output-label">
                                        Transformed Payload
                                    </div>
                                    <div className="output-body">
                                        <pre>
                                            {this.state.transformed}
                                        </pre>
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
