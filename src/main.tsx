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
import Deserts from './routes/Deserts';
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
        path: "deserts",
        element: <Deserts />
      }
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
