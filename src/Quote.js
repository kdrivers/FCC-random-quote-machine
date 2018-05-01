import React from 'react';
import './App.css';

const Quote = (props) => (
        
        <div className="quote">
            <p>"{props.text}"</p>
            <p>-{props.author}</p>
            <button className="regular-button" onClick={props.clicked}>New Quote</button><br/>
            <button className="fa fa-twitter" onClick={props.tweet}></button>
            <button className="fa fa-tumblr" onClick={props.tumblr}></button>
        </div>
);

export default Quote;