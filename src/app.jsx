import React from 'react';
import { useState, useEffect } from 'react';
import './app.scss';

import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import axios from 'axios';
import Favorites from './components/favorites';

const App = () => {
  const [data, setData] = useState(null);
  const [requestParams, setParams] = useState({});
  const [method, setMethod] = useState('get');

  const [loading, setLoading] = useState(false);
  const apiCall = (requestParams) => {
    console.log('these are the params', requestParams);
    setLoading(true);
    setParams(requestParams);
  };
  useEffect(() => {
    const callApi = async (requestParams) => {
      console.log(requestParams);

      console.log(requestParams?.url);
      let newData = await axios[method](requestParams.url);
      setData(newData.data);
      setLoading(false);
      setMethod(requestParams.method);
    };
    if (Object.keys(requestParams).length > 0) {
      callApi(requestParams);
    }
    console.log(requestParams);
    console.log('an api call was used');
  }, [requestParams, method]);

  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={apiCall} data={setData} method={method} />
      <Favorites />
      <Results data={data} loading={loading} />
      <Footer />
    </React.Fragment>
  );
};

export default App;
