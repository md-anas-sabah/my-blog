import Header from './component/Header';
import './App.css';
// import Banner from './component/Banner';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from './component/Body';


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
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
