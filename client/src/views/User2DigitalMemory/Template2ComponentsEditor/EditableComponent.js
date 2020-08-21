import React from 'react';
import "../Template2DigitalMemory.css"
import "../../../styles/styles.css"
import { DragItemTypes } from "./dragitems.js"
import { useDrop, useDrag } from "react-dnd"

function Draggable(props){
    const[{isDragging}, drag] = useDrag({
        item: {
            type: DragItemTypes.IMAGE,
            rownum: props.rownum,
            index: props.index,
        },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    })

    const[{isOver}, drop] = useDrop({
        accept: DragItemTypes.IMAGE,
        drop: (item, monitor) => props.swapTemplateItems(item.rownum, item.index, props.rownum, props.index),
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        }),
    })

    return(
        <div
            style={{height: "100%", width: "100%", padding: "0px", borderStyle: "none"}}
            ref = {drag}
        >
            <div
                style={{height: "100%", filter: "blur(" + (isOver ? "5px" : "0px") + ") sepia(" + (isOver ? "100%" : "0%") + ")"}}
                ref = {drop}
            >
                {props.children}
            </div>
        </div>
    )
}

export default class EditableComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            rownum: props.rownum,
            index: props.index,
            type: props.type,
        }
        this.swapTemplateItems = props.swapTemplateItems.bind(this)
        this.togglePopupIsOpen = props.togglePopupIsOpen.bind(this)
        this.sendClickedInfo = props.sendClickedInfo.bind(this)
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            rownum: nextProps.rownum,
            index: nextProps.index,
            type: nextProps.type,
        })
    }

    render(){
        //button to manage clicks
        //Draggable to manage drag and drops
        return(
            <div>
                <button
                    style={{height: "100%", width: "100%", padding: "0px", borderStyle: "none", margin: "0px", backgroundColor: "transparent"}}
                    onClick={() => {
                        this.togglePopupIsOpen()
                        this.sendClickedInfo(this.state.rownum, this.state.index, this.state.type)
                    }}
                >
                    <Draggable
                        rownum={this.state.rownum}
                        index={this.state.index}
                        swapTemplateItems={this.swapTemplateItems}
                    >
                        {this.props.children}
                    </Draggable>
                </button>
            </div>
        )
    }
}
