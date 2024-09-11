import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './error-page';
import App from './App'
import Starters from './routes/Starters';
import Mains from './routes/Mains';
import Desserts from './routes/Desserts';
import './index.scss'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "starters",
        element: <Starters />
      },
      {
        path: "mains",
        element: <Mains />
      },
      {
        path: "desserts",
        element: <Desserts />
      }
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
