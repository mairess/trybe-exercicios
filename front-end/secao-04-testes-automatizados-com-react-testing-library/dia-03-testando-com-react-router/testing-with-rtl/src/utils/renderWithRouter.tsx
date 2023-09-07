// src/utils/renderWithRouter.tsx

import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

// export const renderWithRouter = (ui: JSX.Element, { route = '/' } = {}) => {
//   window.history.pushState({}, '', route);

//   return {
//     user: userEvent.setup(),
//     ...render(ui, { wrapper: BrowserRouter }),
//   };
// };

function renderWithRouter(ui: JSX.Element, { route = '/' } = {}) {
  window.history.pushState({}, '', route);
  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: BrowserRouter }),
  };
}

export default renderWithRouter;
