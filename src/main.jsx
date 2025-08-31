import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './routes/routes.jsx'
import { RouterProvider } from 'react-router'
import Aos from 'aos'
import 'aos/dist/aos.css';

Aos.init();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
