import React from 'react';
import './styleIntro.css';
import '../media-query.css';

const Intro =(props)=>{
    return (
        <div className={props.showHeader ? 'header show-header' : 'header hide-header'}>
            <img className="image" src="./profilepic.png" />
            <div className="my-name">
                Hello, My name is Lo Saephan
            </div>
            <div className="my-job">
                I'm a full stack web developer
            </div>
        </div>
    )
}

export default Intro;