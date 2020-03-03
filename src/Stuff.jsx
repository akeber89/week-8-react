import React from 'react';

import Header from "./Header";
import Paragraph from "./Paragraph";
import Square from "./Square";
import People from "./People";
import Pagination from "./Pagination";

const Stuff = () => (

    <React.Fragment>
        <Header />
        <Paragraph message={<Square />}/>
        <Square />
        <People />
        <Pagination />
    </React.Fragment>

)

export default Stuff;