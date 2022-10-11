import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Component/Layout/Main';
import Home from './Component/Home/Home';
import Statistics from './Component/Statistics/Statistics';
import Blog from './Component/Blog/Blog';
import About from './Component/About/About';
import Carts from './Component/Carts/Carts';
import CartDetail from './Component/CartDetail/CartDetail';

function App() {
  const router = createBrowserRouter([
      {path: '/', element: <Main></Main>,
      children: [
        
        {path: '/', element: <Home></Home>,
        loader: async() =>{
          return fetch('https://openapi.programming-hero.com/api/quiz')
        }
      },
      {path: '/home', element: <Home></Home>,
      loader: async() =>{
        return fetch('https://openapi.programming-hero.com/api/quiz')
      }
    },

       {path: 'cart', element: <Carts></Carts>,
        loader: async() =>{
          return fetch('https://openapi.programming-hero.com/api/quiz')
        }
      },
      {path: 'cart/:cartId', 
      element: <CartDetail></CartDetail>,
        loader: async({params}) =>{
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.cartId}`)
        }
      },

        {path: '/statistics', 
        element: <Statistics></Statistics>,
        loader: async() =>{
          return fetch('https://openapi.programming-hero.com/api/quiz')
        }
      },
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
