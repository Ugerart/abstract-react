import { createBrowserRouter } from "react-router-dom";
import App from './App';

import Eyeglasses from './pages/Eyeglasses';
import Home from './pages/Home';
import Lenses from './pages/Lenses';
import NoPage from './pages/NoPage';
import Sunglasses from './pages/Sunglasses';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Home /> },
      { path: 'sunglasses', element: <Sunglasses /> },
      { path: 'eyeglasses', element: <Eyeglasses /> },
      { path: 'lenses', element: <Lenses /> },
      { path: '*', element: <NoPage /> },
    ]

  }
]);