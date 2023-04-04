import Header from './component/Header';
import './App.css';
// import Banner from './component/Banner';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from './component/Body';
import NextAuth from './pages/NextAuth';


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
  },
  {
    path: '/next-auth',
    element: <NextAuth />
  }
])


function App() {
  return (
    <div className='md:w-[80rem] md:ml-auto md:mr-auto'>
      <Header />
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
