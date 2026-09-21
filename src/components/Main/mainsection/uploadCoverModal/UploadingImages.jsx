import { useState, useEffect } from 'react'
import { authHeaders, getMyProfile } from '../../../../api/strive';

const SingleFileUploader = () => {
  const [file, setFile] = useState(null);
    const [userId, setUserId] = useState(null);

  useEffect(() => {
    getMyProfile().then(profile => setUserId(profile._id));
  }, []);

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
  if (!file || !userId) return;

  const formData = new FormData();
  formData.append('profile', file);

  try {
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/picture`, {
      method: 'POST',
      headers: authHeaders,
      body: formData,
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

    return (
    <>
      <div className="input-group">
        <input id="file" type="file" onChange={handleFileChange} />
      </div>
      {file && (
        <section>
          File details:
          <ul>
            <li>Name: {file.name}</li>
            <li>Type: {file.type}</li>
            <li>Size: {file.size} bytes</li>
          </ul>
        </section>
      )}

      {file && (
        <button
          onClick={handleUpload}
          className="submit"
        >Upload a file</button>
      )}
    </>
  );
};

export default SingleFileUploader;