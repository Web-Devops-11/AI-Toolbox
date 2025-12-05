import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children : [
        {
            path: "",
            element: <Home/>,
        },
        {
            path: "/about",
            element: <About/>,
        },
                {
            path: "/contact",
            element: <Contact/>,
        }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={router} />);