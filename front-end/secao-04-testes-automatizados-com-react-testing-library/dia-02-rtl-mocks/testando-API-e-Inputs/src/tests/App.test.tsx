// App.test.tsx

import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import App from '../App';

// describe('Testando fetch', () => {
//   afterEach(() => vi.clearAllMocks());

//   it('fetch a joke', async () => {
//     const MOCK_JOKE = {
//       id: '7h3oGtrOfxc',
//       joke: 'Thanks for explaining the word "many" to me. It means a lot.',
//     };

//     const MOCK_RESPONSE = {
//       ok: true,
//       status: 200,
//       json: async () => MOCK_JOKE,
//     } as Response;

//     const mockFetch = vi.spyOn(global, 'fetch').mockResolvedValue(MOCK_RESPONSE);

//     render(<App />);
//     const renderedJoke = await screen.findByText('Thanks for explaining the word "many" to me. It means a lot.');
//     expect(renderedJoke).toBeInTheDocument();
//     expect(mockFetch).toHaveBeenCalledTimes(1);
//     expect(mockFetch).toHaveBeenCalledWith('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } });
//   });
// });

// App.test.tsx

describe('Testando fetch', () => {
  // ...
  it('fetches a joke', async () => {
    const joke = {
      id: '7h3oGtrOfxc',
      joke: 'Thanks for explaining the word "many" to me. It means a lot.',
      status: 200,
    };

    global.fetch = vi.fn(() => Promise.resolve({
      json: () => Promise.resolve(joke),
    } as Response));

    render(<App />);
    const renderedJoke = await screen.findByText('Thanks for explaining the word "many" to me. It means a lot.');
    expect(renderedJoke).toBeInTheDocument();
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } });
  });
});

describe('Testando botão New joke', () => {
  afterEach(() => vi.clearAllMocks());

  test('fetches a joke', async () => {
    const MOCK_JOKE = {
      id: '7h3oGtrOfzz',
      joke: 'What kind of dinosaur loves to sleep? A stega-snore-us.',
    };

    const MOCK_RESPONSE = {
      ok: true,
      status: 200,
      json: async () => MOCK_JOKE,
    } as Response;

    const mockFetch = vi.spyOn(global, 'fetch').mockResolvedValueOnce(MOCK_RESPONSE);

    render(<App />);
    const renderedNewJoke = await screen.findByText('What kind of dinosaur loves to sleep? A stega-snore-us.');
    expect(renderedNewJoke).toBeInTheDocument();
    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(mockFetch).toHaveBeenCalledWith('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } });

    const MOCK_JOKE_2 = {
      id: '6h3xGtRofiz',
      joke: 'What’s Forest Gump’s Facebook password? 1forest1',
    };

    const MOCK_RESPONSE_2 = {
      ok: true,
      status: 200,
      json: async () => MOCK_JOKE_2,
    } as Response;

    const secondMockFetch = vi.spyOn(global, 'fetch').mockResolvedValueOnce(MOCK_RESPONSE_2);

    const newJokeBtn = screen.getByRole('button');
    await userEvent.click(newJokeBtn);

    const secondRenderedJoke = await screen.findByText('What’s Forest Gump’s Facebook password? 1forest1');

    expect(secondRenderedJoke).toBeInTheDocument();
    expect(secondMockFetch).toHaveBeenCalledTimes(1);
  });
});
