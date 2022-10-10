import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Component/Layout/Main';
import Home from './Component/Home/Home';
import Statistics from './Component/Statistics/Statistics';
import Blog from './Component/Blog/Blog';
import About from './Component/About/About';

function App() {
  const router = createBrowserRouter([
      {path: '/', element: <Main></Main>,
      children: [
        {path: '/', element: <Home></Home>},
        {path: '/home', element: <Home></Home>},
        {path: '/statistics', element: <Statistics></Statistics>},
        {path: '/blog', element: <Blog></Blog>}
      ]
    },
    {path: '/abouts', element: <About></About>},
    {path: '*', element: <div>404 Page Not Found!</div>}
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
