import React from "react";
import {ThemeSwitcher} from "./theme-switcher/theme-switcher.component";

export default class AppSettings extends React.Component<{}, {isPaneOpen: boolean}> {

    constructor(props: any) {
        super(props);
        this.state = {
            isPaneOpen: false
        }
    }

    render() {
        return(
            <div className="overlay">
                <div hidden={!this.state.isPaneOpen}>
                    <ThemeSwitcher/>
                </div>
                <button onClick={() => this.setState({isPaneOpen: !this.state.isPaneOpen})}>Settings</button>
            </div>
        )
    }
}
