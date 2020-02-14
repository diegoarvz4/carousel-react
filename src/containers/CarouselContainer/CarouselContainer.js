import React from 'react';
import Carousel from '../../components/Carousel/Carousel';


export default class CarouselContainer extends React.Component {
    constructor() {
        super();
        this.state =  {
            xPos: 0,
            mouseDown: false,
            mouseUp: true,
            items: ["1",  "2", "3"],
            offset: 0,
            transition: false,
        }
    }

    setMouseDown(value) {
        this.setState({
            mouseDown: true,
            mouseUp: false,
            xPos: value,
        })
    }

    setMouseUp() {
        this.setState({
            mouseDown: false,
            mouseUp: true,
        })
    }

    setTransition(value){
        this.setState({
            transition: value
        })
    }

    setOffset(value) {
        
        this.setState(prevState => ({
            offset: prevState.offset + value,
        }))
    }

    setXPos(value) {
        this.setState({
            xPos: value,
        })
    }

    setDirection(newXpos) {
        this.setState({
            xPos: newXpos
        })
    }

    render() {
        const { items, mouseDown, mouseUp, transition, xPos, offset } = this.state;
        return (
            <div className="CarouselContainer">
                <Carousel 
                    setMouseDown={this.setMouseDown.bind(this)} 
                    setMouseUp={this.setMouseUp.bind(this)}
                    mouseDown={mouseDown}
                    mouseUp={mouseUp}
                    setXPos={this.setXPos.bind(this)}
                    items={ items } 
                    xPos={xPos}
                    offset={offset}
                    transition={transition}
                    setTransition={this.setTransition.bind(this)}
                    setOffset={this.setOffset.bind(this)}
                />
            </div>
        )
    }
}