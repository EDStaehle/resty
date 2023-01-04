import React from 'react';
import { useState } from 'react';
import './app.scss';

import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);
  const [requestParams, setParams] = useState({});

  const callApi = async (requestParams) => {
    console.log(requestParams);
    let method = requestParams.method;
    console.log(requestParams.url);
    let newData = await axios[method](requestParams.url);
    setData(newData.data);
    setParams(requestParams);
  };

  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} />
      <Results data={data} />
      <Footer />
    </React.Fragment>
  );
};

export default App;
