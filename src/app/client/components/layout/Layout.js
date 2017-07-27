import React from "react";
import NavigationBar from './NavigationBar';
import Footer from './Footer';

require("!style-loader!css-loader!sass-loader!../../scss/style.scss");

export class Layout extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <NavigationBar history={history} />
                </div>
                <div className="row">
                    <div className="container-fluid app-wrapper" id="layout">
                        {this.props.children}
                    </div>
                </div>
                <div className="row">
                    <Footer />
                </div>
            </div>
        );
    }
}
