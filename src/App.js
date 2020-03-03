import React from 'react';
import Header from './Header.jsx';
import Paragraph from './Paragraph.jsx';
import Square from './Square.jsx';
import People from './People.jsx';
import Stuff from './Stuff.jsx';
import Pagination from './Pagination.jsx';

function App() {
  return (
    <div>
      <Header text= 'new title'/>
      <Paragraph message = 'The Unmarried Mother was a man twenty–five years old, no taller than I am, childish features and a touchy temper. I didn’t like his looks—I never had—but he was a lad I was here to recruit, he was my boy. I gave him my best barkeep’s smile.' />
      <Paragraph />
      <Paragraph />
      <Paragraph />
      <Square colour= 'blue' />
      <People />
      <Stuff />
      <Pagination />
    </div>
  );
}

export default App;
