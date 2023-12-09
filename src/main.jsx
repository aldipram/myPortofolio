import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from './UI/Theme.jsx';
import { ProjectProvider } from './Components/ProjectContext.jsx';
import DetailProject from './Pages/CardDetails.jsx'

const BrowserRouter = createBrowserRouter([
  // Root route
  {
    path: "/",
    element: <App />,
  },
  // Detail route
  {
    path: "/detail/:id",
    element: <DetailProject />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ProjectProvider>
    <React.StrictMode>
      <ThemeProvider>
        <RouterProvider router={BrowserRouter} />
      </ThemeProvider>
    </React.StrictMode>
  </ProjectProvider>
);