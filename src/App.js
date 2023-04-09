import Header from './component/Header';
import './App.css';
import Banner from '../src/component/Banner'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from './component/Body';
import NextAuth from './pages/NextAuth';
import PromisePage from './pages/PromisePage';
import MoreBlogs from './pages/MoreBlogs';
import ReactRedux from './pages/ReactRedux';
import LifeCyclePage from './pages/LifeCyclePage';


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
  },
  {
    path: '/more-blogs',
    element: <MoreBlogs/>
  },
  {
    path: "/react-redux",
    element: <ReactRedux/>

  },
  {
    path: "lifecycle",
    element: <LifeCyclePage/>
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
