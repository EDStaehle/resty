import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Results from './index';
describe('Results test', () => {
  test('produces results', () => {
    const data = {
      name: 'john',
      method: 'get',
      url: 'fakeWebsite.com',
    };
    render(<Results data={data} />);
    const results = screen.getByTestId('results-data');

    expect(results).toBeInTheDocument();
  });
});
