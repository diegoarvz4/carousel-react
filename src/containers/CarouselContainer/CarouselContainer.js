import React from 'react';
import Carousel from '../../components/Carousel/Carousel';


export default class CarouselContainer extends React.Component {
    constructor() {
        super();
        this.state =  {
            xPos: 0,
            mouseDown: false,
            mouseUp: true,
            items: [
                    "1",  
                    "2", 
                    "3", 
                    "4", 
                    "5", 
                    "6", 
                    "7", 
                    "8", 
                    "9", 
                    "10"
                ],
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

    setDirection(newXpos) {
        this.setState({
            xPos: newXpos
        })
    }

    visualConfig() {
        return {
            fontSize: '100px',
            transform: `translateX(${this.state.offset}px)`,
            transition: 'all 0.3s',
            transitionTimingFunction: 'ease-in-out',
        }
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
                    items={ items } 
                    xPos={xPos}
                    offset={offset}
                    transition={transition}
                    setTransition={this.setTransition.bind(this)}
                    setOffset={this.setOffset.bind(this)}
                    visualConfig={this.visualConfig()}
                />
            </div>
        )
    }
}