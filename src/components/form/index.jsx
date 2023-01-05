import React, { useState } from 'react';

import './form.scss';

const Form = (props) => {
  const { handleApiCall } = props;

  const { method } = props;
  const [jsonData, setJsonData] = useState();
  const [url, setUrl] = useState();
  const updateMethod = (e) => {
    e.preventDefault();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method: method,
      jsonData: jsonData,
      url: url,
    };

    handleApiCall(formData);
  };

  return (
    <>
      <form data-testid='form-test' onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input
            data-testid='form-input'
            name='url'
            type='text'
            onChange={(e) => {
              setUrl(e.target.value);
            }}
          />
          <button data-testid='form-button' type='submit'>
            GO!
          </button>
        </label>
        <label>
          <textarea onChange={(e) => setJsonData(e.target.value)}></textarea>
        </label>
        <label className='methods'>
          <button id='get' onClick={updateMethod}>
            GET
          </button>
          <button id='post' onClick={updateMethod}>
            POST
          </button>
          <button id='put' onClick={updateMethod}>
            PUT
          </button>
          <button id='delete' onClick={updateMethod}>
            DELETE
          </button>
        </label>
      </form>
    </>
  );
};

export default Form;
