import { useState } from 'react';
import './App.css';
import FileDropArea from './components/FileDropArea';

function App() {
  return (
    <div className='App'>
      <h1>Image Tagger</h1>
      <h2>
        Add your image by clicking "add file" or by dropping a file in the area
        below
      </h2>
      <FileDropArea />
    </div>
  );
}

export default App;
