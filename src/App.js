import Header from './component/Header';
import './App.css';
import Banner from '../src/component/Banner'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from './component/Body';
import NextAuth from './pages/NextAuth';
import PromisePage from './pages/PromisePage';


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
  },
  {
    path: '/next-auth',
    element: <NextAuth />
  },
  {
    path:'/promisepage',
    element: <PromisePage />
  }
])


function App() {
  return (
    <div className='md:w-[80rem] md:ml-auto md:mr-auto'>
      <Header />
      <Banner />
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
