import React from 'react';
import Header from "./Layout/Header";

class NotFound extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                    <img
                        style={{maxWidth:"50vw", paddingTop:"10vh"}}
                        src="/img/undraw_page_not_found_su7k.svg"
                        alt="URL not found"/>
                    <h2>URL {window.location.pathname} not found!</h2>
                </div>
            </div>
        )
    }
}

export default NotFound;
