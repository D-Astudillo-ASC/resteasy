import React from 'react';
import "../TemplateDigitalMemory.css"
import "../../../styles/styles.css"
import { DragItemTypes } from "./dragitems.js"
import { useDrop, useDrag } from "react-dnd"

function Draggable(props){
    const[{isDragging}, drag] = useDrag({
        item: {
            type: DragItemTypes.IMAGE,
            rownum: props.rownum,
            colnum: props.colnum,
        },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    })

    const[{isOver}, drop] = useDrop({
        accept: DragItemTypes.IMAGE,
        drop: (item, monitor) => (props.isMergeable(item.rownum, item.colnum, props.rownum, props.colnum) ? 
            props.promptMerge(item.rownum, item.colnum, props.rownum, props.colnum) : 
            props.swapTemplateItems(item.rownum, item.colnum, props.rownum, props.colnum)
        ),
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        }),
    })

    return(
        <div
            style={{height: (props.height ? props.height : "100%"), width: "100%", padding: "0px", borderStyle: "none"}}
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
            height: props.height,
            rownum: props.rownum,
            colnum: props.colnum,
            img: props.img,
        }
        this.swapTemplateItems = props.swapTemplateItems.bind(this)
        this.togglePopupIsOpen = props.togglePopupIsOpen.bind(this)
        this.sendClickedInfo = props.sendClickedInfo.bind(this)
        this.isMergeable = props.isMergeable.bind(this)
        this.promptMerge = props.promptMerge.bind(this)
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            height: nextProps.height,
            rownum: nextProps.rownum,
            colnum: nextProps.colnum,
            img: nextProps.img,
        })
    }

    render(){
        return(
            <div>
                <button
                    style={{height: (this.state.height ? this.state.height : "100%"), width: "100%", padding: "0px", borderStyle: "none"}}
                    onClick={() => {
                        this.togglePopupIsOpen()
                        this.sendClickedInfo(this.state.rownum, this.state.colnum, this.state.img)
                    }}
                >
                    <Draggable
                        height={this.state.height}
                        rownum={this.state.rownum}
                        colnum={this.state.colnum}
                        swapTemplateItems={this.swapTemplateItems}
                        style={{positiong: "relative", zIndex: "-1"}}
                        isMergeable={this.isMergeable}
                        promptMerge={this.promptMerge}
                    >
                        {this.props.children}
                    </Draggable>
                </button>
            </div>
        )
    }
}
