import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Documentation from "./components/Documentation";
import App from "./App";
import './App.css'
import Component from './components/DocsWrapper';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Resource from './components/Resource'
import Home from './components/Home.jsx'
import './components/Main.css'
import Main from './components/Main.jsx'
import './components/Markdown.css'
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
  },
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "/documentation",
    element: <Documentation />
  },
  {
    path: '/docs/:docId',
    element: (<>
      <header>
        <Navbar />
      </header>
      <main>
        <Sidebar/>
        <Component/>
        <Resource/>
      </main>
    </>)
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
