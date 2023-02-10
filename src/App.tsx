import { useState } from 'react';
import './App.css';

function App() {
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');

  const onDragOver = (ev: any) => {
    ev.preventDefault();
  };

  const onDrop = (ev: any) => {
    ev.preventDefault();
    ev.stopPropagation();

    handleFile(ev.dataTransfer.files[0]);
  };

  const handleFile = (file) => {
    //you can carry out any file validations here...
    setImage(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const onUploadButtonClick = () => {
    console.log('click');
  };

  const onCancel = () => {
    setPreviewUrl('');
    setImage(null);
  };

  const onGenerateTags = () => {};

  return (
    <div className='App'>
      <h1>Image Tagger</h1>
      <section
        onDragOver={onDragOver}
        onDrop={onDrop}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        {previewUrl ? (
          <>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button onClick={onGenerateTags}>Generate Tags</button>
              <button onClick={onCancel}>Cancel</button>
            </div>
            <span> {image.name} </span>
            <img src={previewUrl} alt='image' />
          </>
        ) : (
          <div
            style={{
              border: 'dashed',
              borderRadius: '1rem',
              padding: '1rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <button onClick={onUploadButtonClick}>+ Add File</button>
            <h3>Or drag the file and drop here</h3>
          </div>
        )}
      </section>
    </div>
  );
}

export default App;
