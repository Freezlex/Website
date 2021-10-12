import React from "react";
import '../style/Discord.css'

class Discord extends React.Component{

    componentDidMount(){
        window.location.href = "https://discord.gg/mFQMxqx";
    }

    render() {

        return(
            <div className="discord">
                <p> You Will be redirected in a second !</p>
            </div>
        )
    }
}

export default Discord
