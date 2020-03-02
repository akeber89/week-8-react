import React from 'react';



const People = () => {
    let names = ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"];

    return (
        <ul>
            {names.map((name,index) => (
                <li key={index}>{name}</li>
            ))}

        </ul>
    )
};

// your component here


export default People;

// Create a component <People> that displays a list of names in a <ul>. The names should comes from an array.