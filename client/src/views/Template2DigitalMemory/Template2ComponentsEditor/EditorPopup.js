import React from 'react';
import Popup from "reactjs-popup"

function InsertPopup(props){
    return(
        <div>
            <button
                onClick={() => {props.changeLastType("img", "/static/media/image8.e8b7e3d9.jpg")}}
            >
                Add image
            </button>
            <button
                onClick={() => {props.changeLastType("text")}}
            >
                Add Memory
            </button>
            <button
                onClick={() => {props.changeLastType("img", "/static/media/image2.5726fd40.png")}}
            >
                Add Spotify playlist
            </button>
        </div>
    )
}

function ImagePopup(props){
    return(
        <div>
            <button
                onClick={() => {props.clearLastClicked()}}
            >
                Delete this.
            </button>
            <button
                onClick={() => {props.changeLastType("img", "/static/media/image8.e8b7e3d9.jpg")}}
            >
                Show a different image
            </button>
            <button
                onClick={() => {props.changeLastType("text")}}
            >
                Change to Memory
            </button>
            <button
                onClick={() => {props.changeLastType("img", "/static/media/image2.5726fd40.png")}}
            >
                Change to Spotify playlist
            </button>
        </div>
    )
}

function NonimagePopup(props){
    return(
        <div>
            <button
                onClick={() => {props.clearLastClicked()}}
            >
                Delete this.
            </button>
            <button
                onClick={() => {props.changeLastType("img", "/static/media/image8.e8b7e3d9.jpg")}}
            >
                Change to image
            </button>
            <button
                onClick={() => {props.changeLastType("text")}}
            >
                Show a different Memory
            </button>
            <button
                onClick={() => {props.changeLastType("img", "/static/media/image2.5726fd40.png")}}
            >
                Change to Spotify playlist
            </button>
        </div>
    )
}

function CustomPopup(props){
    const type = props.type
    console.log(type)
    if(type === "empty"){
        return(
            <InsertPopup
                large={props.large}
                changeLastType={props.changeLastType}
                breakInsert={props.breakInsert}
            />
        )
    }
    if(type === "text"){
        return(
            <NonimagePopup
                clearLastClicked={props.clearLastClicked}
                changeLastType={props.changeLastType}
            />
        )
    }
    else{
        return(
            <ImagePopup
                clearLastClicked={props.clearLastClicked}
                changeLastType={props.changeLastType}
            />
        )
    }
}

export default function EditorPopup (props){
    return(
        <Popup
            open={(props.popupIsOpen)}
            onClose={() => {props.togglePopupIsOpen()}}
            style={{zIndex: "999999"}}
        >
            <CustomPopup
                type={props.lastClickedTyp}
                clearLastClicked={props.clearLastClicked}
                changeLastType={props.changeLastType}
            />
        </Popup>
    )
}
