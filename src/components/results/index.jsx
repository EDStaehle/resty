import React from 'react';
import JsonFormatter from 'react-json-formatter';
import './results.scss';
const Results = (props) => {
  const { data, loading } = props;

  let newData = JSON.stringify(data);

  console.log(loading);
  const jsonStyle = {
    propertyStyle: { color: 'red' },
    stringStyle: { color: 'green' },
    numberStyle: { color: 'darkorange' },
  };
  return (
    <div className='resultsDiv'>
      <div className='lines'></div>
      <div className='lines'></div>
      <div className='lines'></div>
      <div className='lines'></div>
      {loading ? (
        <pre>loading...</pre>
      ) : (
        <pre data-testid='results-data'>
          this is text {console.log(newData)}
          <JsonFormatter json={newData} tabWith={4} jsonStyle={jsonStyle} />
        </pre>
      )}
    </div>
  );
};
export default Results;
