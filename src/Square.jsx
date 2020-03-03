import React from "react";

const Square = ({ colour }) => (
    
    <div style = {{
    width: '200px',
    height: '200px',
    background: colour,
    }} />
);


Square.defaultProps = {
    colour: "#f00",
};

//const Square = () => (
//    <div style={divStyle}></div>
//)

export default Square;
  

