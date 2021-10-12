import React from "react";
import '../style/PageNotFound.css'

class PageNotFound extends React.Component{

    constructor(props) {
        super(props);
        this.fourOFourSize = this.fourOFourSize.bind(this)
    }

    fourOFourSize(){
        let text = document.getElementById("four-zero-four")
        text.style.fontSize = `${parseInt(window.getComputedStyle(text).fontSize.replace('px', '')) + 10}px`
    }

    render() {
        return(
            <div className="page-not-found">
                <p className="could-not-find">Uh ... Could not find what you are searching for ... That's weird ...</p>
                <p className="could-not-find">Some people call that a <span id="four-zero-four" onClick={this.fourOFourSize}>404</span> error !</p>
            </div>
        )
    }
}

export default PageNotFound
