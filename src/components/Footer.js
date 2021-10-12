import React from "react";
import '../style/Footer.css'

class Footer extends React.Component{
    render() {
        return(
            <div className="footer">
                <footer>
                    <p>©{new Date().getFullYear()} Freezlex, all rights reserved.</p>
                </footer>
            </div>
        )
    }
}

export default Footer
