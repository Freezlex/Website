import React from "react";
import {Link, withRouter} from "react-router-dom";
import '../style/Navigation.css'

class Navigation extends React.Component{
    render() {
        return(
            <div className="navigation">
                <div className="branding">
                    <Link className="navbar-brand" to="/">Freezlex</Link>
                </div>
                <div className="navbar">
                    <div className={this.props.location.pathname === "/" ? "active" : ""}>
                        <Link className="nav-item" to="/">Home</Link>
                    </div>
                    <div className={this.props.location.pathname === "/twitch" ? "active" : ""}>
                        <Link className="nav-item" to="/twitch">Twitch</Link>
                    </div>
                    <div className={this.props.location.pathname === "/discord" ? "active" : ""}>
                        <Link className="nav-item" to="/discord">Discord</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Navigation)
