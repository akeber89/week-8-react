import React from "react";

const Paragraph = ({ message }) => (
    <p>{ message }</p>
); 

Paragraph.defaultProps = {
    children: "Hello, world",
};
// if curly braces, I need a return statement

export default Paragraph;
