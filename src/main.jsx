import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home.jsx';
import Create from './components/Create.jsx';
import Update from './components/Update.jsx';
import Detail from './components/Detail.jsx';
import { NotFoundPage } from './components/NotFoundPage.jsx';
import { Layout } from './layout/Layout.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/create",
        element: <Create />,
      },
      {
        path: "/update/:id",
        element: <Update />,
      },
      {
        path: "/detail/:id",
        element: <Detail />,
      },
    ]
  },
  {
    path:"*",
    element: <NotFoundPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
