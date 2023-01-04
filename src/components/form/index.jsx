import React, { useState } from 'react';

import './form.scss';

const Form = (props) => {
  const { handleApiCall } = props;
  const [method, setMethod] = useState('get');

  const updateMethod = (e) => {
    e.preventDefault();
    let newMethod = e.target.id;
    setMethod(newMethod);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method: method,
      url: e.target.url.value,
    };
    handleApiCall(formData);
  };

  return (
    <>
      <form data-testid='form-test' onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input name='url' type='text' />
          <button data-testid='form-button' type='submit'>
            GO!
          </button>
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
