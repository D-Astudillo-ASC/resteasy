import React from "react"



export default function NextStep(props) {
    return (
        <div style={{ width: "280px", height: "250px", textAlign: "center"}}>
            <div style={{ borderRadius: "10px", backgroundColor: "#FDFFFA", border: "1px solid #21231F", width: "280px", height: "180px" }}>
                <h6 style={{ fontWeight: "bold", paddingTop: "20px" }}>{props.headerText}</h6>
                <div style={{ justifyContent: "center", width: "280px", marginBottom: "10px" }}>
                    <img src={props.imgSrc} style={{ width: "100%", height: "100%", width: "45px", height: "40px", objectFit: "cover" }} />
                </div>
                <br/>
                <a onClick={props.togglePopup} style={{ padding: "5px", textAlign: "center",  textDecoration: "underline", color: "darkblue"}}>{props.mainText}</a>
            </div>
        </div>
    )
}