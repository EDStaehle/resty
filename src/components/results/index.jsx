import React from 'react';
import JsonFormatter from 'react-json-formatter';
import './results.scss';
const Results = (props) => {
  const { data } = props;
  let newData = JSON.stringify(data);

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
      <pre data-testid='results-data'>
        <JsonFormatter json={newData} tabWith={4} jsonStyle={jsonStyle} />
      </pre>
      {/* <pre data-testid='results-data'>{newData ? newData : ' '}</pre> */}
    </div>
  );
};
export default Results;
