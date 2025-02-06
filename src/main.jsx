import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './router/RouterApp';
import './index.css'
// Creación del router con las rutas definidas
const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
</StrictMode>
);
