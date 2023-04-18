import { Link } from 'react-router-dom'
import Blogs from '../component/Blogs'

function MoreBlogs() {
    return (
        <div className='px-10 py-5'>
            <div>
               <hr className="border-[#F7AB0A] mb-10" />
            </div>
             
             <div className='flex flex-col items-center md:flex-col md:items-center' >
                <div className='flex flex-col md:flex-row md:flex-wrap md:justify-between' >
                <Link to="/lifecycle">
                    <Blogs className="hidden lg:inline-block" title="Life Cycle of a Component" image="https://res.cloudinary.com/practicaldev/image/fetch/s--RDdxoyBw--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/g1gg7j4clkbh0i84eka7.png" createdAt="08 July 2022" category_1="React" category_2="Dev.to"/> 
                </Link>
                <Link to="/typescript+react">
                    <Blogs title="TypeScript + React" image="https://res.cloudinary.com/practicaldev/image/fetch/s--X8DtWdxA--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lk4xyn1glcyerqqs66xe.png" createdAt="28 June 2022" category_1="React" category_2="TypeScript"/> 
                </Link>
                </div>
             </div> 
        </div>
      )
}

export default MoreBlogs