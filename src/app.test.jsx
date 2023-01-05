import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import App from './app';

const server = setupServer(
  rest.get('/testGet', (req, res, ctx) => {
    return res(ctx.json({ data: 'mock data' }));
  }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
describe('results', () => {
  test('displays the request method and URL when the form is submitted', async () => {
    render(<App />);
    const input = screen.getByTestId('form-input');
    const button = screen.getByTestId('form-button');
    fireEvent.change(input, { target: { value: '/testGet' } });
    fireEvent.click(button);
    const results = await screen.findByTestId('results-data');
    expect(results).toBeInTheDocument();
    expect(results).toHaveTextContent('mock data');
  });
});

//
