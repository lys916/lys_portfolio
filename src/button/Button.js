import React from 'react';
import './styleButton.css';
import '../media-query.css';

const Button =(props)=>{

    const lineStyle = props.showLine ? 
        {borderBottom: `2px solid ${props.activeButton.color}`, transition: 'borderBottom 1s'} 
        : null;
        
    return (
        <div className={`buttons ${props.showLine ? `showline-${props.activeButton.name}` : null}`} >
            {
            props.buttons.map((button, index)=>{

               // in order to trigger transition, an element need an inital state
               // and end state
               // before component mounts, props.showButton is set to false for initial state
               // after componentDidMount, props.showButton is set to true
                const classNames = props.showButton ? 
                    `${button.name} show-${button.name} show-button button` 
                    : `${button.name} button`;

                const introHeight = button.name === 'home' ? 1000 : 0;

                const backgroundStyle = props.activeButton.color === button.color ? 
                    {background: props.activeButton.color, color: 'black', fontWeight: 'bold'} 
                    : null;

                return (
                    <div 
                        className={classNames} 
                        style={backgroundStyle} 
                        onClick={()=>{props.onButtonClick(introHeight, index)}}>
                            {button.name.charAt(0).toUpperCase() + button.name.substr(1)}
                    </div> 
                )
            })
            }
        </div>
    )
}

export default Button;