import { useState } from 'react';
import './App.css';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import { getTags } from './api';
import { blobToBase64 } from './utils';

import Tags from './components/Tags';
import FileInput from './components/FileInput';
import InputGroup from './components/InputGroup';

export default function App() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [file, setFile] = useState<Object>({});
  const [imagePreview, setImagePreview] = useState<string>('');
  const [tags, setTags] = useState<string[]>([]);

  const handleFile = (file: Object) => {
    setFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const onCancel = () => {
    setFile({});
    setImagePreview('');
    setTags([]);
  };

  const onGenerateTags = async () => {
    const imgUrl = await blobToBase64(imagePreview);
    const res = await getTags(imgUrl, { username, password });
    setTags(res);
  };

  return (
    <div className='App'>
      <ToastContainer
        position='bottom-center'
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme='dark'
      />
      <h1>Image Tagger</h1>
      <InputGroup label='API Key' onChange={setUsername} />
      <InputGroup label='API Secret' onChange={setPassword} />
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <Tags>{tags}</Tags>
        {imagePreview ? (
          <>
            <div style={{ display: 'flex', gap: '0.5rem', flexShrink: 0 }}>
              <button onClick={onGenerateTags}>Generate Tags</button>
              <button onClick={onCancel}>Cancel</button>
            </div>
            <span> {file.name} </span>
            <img src={imagePreview} alt='image' style={{ width: '90vmin' }} />
          </>
        ) : (
          <FileInput onChange={handleFile} />
        )}
      </section>
    </div>
  );
}
