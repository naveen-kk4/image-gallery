
import React,{ useState } from 'react';
import './App.css';
import ImageSearch from './Components/ImageSearch';
import ImageList from './Components/ImageList';

function App() {
  const [text,setText] = useState([]);
  return (
    <>
    <ImageSearch setText={setText}></ImageSearch>
    <ImageList text={text}></ImageList>
    </>
    
  );
}

export default App;
