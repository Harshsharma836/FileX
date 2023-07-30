import { useRef, useState, useEffect } from 'react';
import './App.css';
import { upLoadFile } from './services/api';

function App() {
  const [file, setFile] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setLoading] = useState(false);

  const fileInputRef = useRef();

  let onAboutClick = () => {};

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        setLoading(true); // Set loading to true when starting to fetch the file URL

        const data = new FormData();
        data.append('name', file.name);
        data.append('file', file);

        try {
          let response = await upLoadFile(data);
          console.log(response); // Check the API response in the console
          setResult(response.path);
        } catch (error) {
          console.error('Error uploading file:', error);
        }

        setLoading(false); // Set loading to false when file URL is fetched
      }
    };

    getImage();
  }, [file]);

  const onUploadClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="container">
      <div className="wrapper">
        <h1 style={{ fontSize: '36px', marginBottom: '10px', color: 'black' }}>FileX</h1>
        <p style={{ fontSize: '20px', marginBottom: '20px', color: 'black' }}>
          Upload and Share Your Files Easily
        </p>

        <button onClick={onUploadClick}>Upload</button>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={(e) => setFile(e.target.files[0])}
        />

        {isLoading ? (
          <img src="https://i.gifer.com/VAyR.gif" alt="Loading..." /> // Replace "loading.gif" with the actual path to your loading GIF
        ) : (
          <a href={result}>{result}</a>
        )}
      </div>

      <div className="about-btn">
        <button onClick={() => onAboutClick()}>More Info</button>
      </div>
    </div>
  );
}

export default App;
