import React from 'react'
import logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'

function TypeScriptReact() {
  return (
    <div className='px-10 py-5'>
        <div>
          <img className="h-60 md:h-[26rem] object-fill w-full" src="https://res.cloudinary.com/practicaldev/image/fetch/s--X8DtWdxA--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lk4xyn1glcyerqqs66xe.png" alt="logo" />
          <div className='mt-1 flex flex-row gap-x-1'>
            <img className='h-8 w-8 rounded-full' src={logo}alt="logo" />
            <div>
              <p className='text-[12px] font-semibold'>Md Anas Sabah</p>
              <p className='text-[8px] text-gray-400'>Posted on 16 July 2022</p>
            </div>
          </div>
        </div>
        <div className='px-5 py-3 text-[10px] md:text-base md:w-96 justify-center bg-gray-900 flex items-center rounded-full text-center text-[#F7AB0A] mt-3 '>
          <Link to="https://dev.to/mdanassabah/typescript-react-2d4b">
             <p>Check this out on Dev.to</p>
          </Link>
        </div>
        <div className='mt-4'>
            <h1 className='text-2xl md:text-4xl font-bold'>TypeScript + React</h1>
            <h2 className='mt-6 text-xl md:text-2xl font-bold'>Why TypeScript + React ?</h2>
            <p className='mt-2'>
              You all think why we need TypeScript when we are just happy creating React App using JavaScript. Now, I was at that stage as well but having used TypeScript for a while I can safely say that it has improved the overall development experience for me.</p>
              <p className='mt-1'>  • With static type checking, you get to learn potential bugs as you're typing the code, than heading to the browser and figure out at run time.</p>

              <p className='mt-1'> • It also provides a way to describe the shape of an object hence providing better documentation and autocomplete.</p>

              <p className='mt-1'> • TypeScript even make maintenance and refactoring large code bases much easier.</p>

              <p className='mt-2'> As you can see there are some pretty good points to help you make the decision of adopting TypeScript.</p> 
            
              <h2 className='mt-6 text-xl md:text-2xl font-bold'>Getting Started</h2>
              <p className='text-sm bg-gray-200 text-black px-2 w-56 rounded-md mt-1 italic'>Install create-react-app</p>
              <p className='mt-2'>create-react-app provides us a TypeScript template we can use:</p>
              <img className='mt-2' src="https://res.cloudinary.com/practicaldev/image/fetch/s--J-NSSvFy--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/k4723sneafctxoydlnih.png" alt="pic" />

              <p className='italic mt-2'>Note: npx stands for Node Package Execute and it comes with the npm to excecute CLI command.</p>

              <p className='mt-2'>Now run the command npm start on your terminal. The command will open the browser on localhost:3000 with your basic react typescript application up and running.</p>
              
              <p className='mt-2'>In src folder, we see index.tsx and an app.tsx file.</p>

              <img className='mt-2' src="https://res.cloudinary.com/practicaldev/image/fetch/s--cr20NuEi--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/i4km82i77tbk7bieic36.png" alt="pic" />

              <p className='italic mt-2'>index.tsx is the entry point to our react app where we mount our app component onto the root DOM node</p>

              <img className='mt-2' src="https://res.cloudinary.com/practicaldev/image/fetch/s--GKPK4Tob--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/a99au12fhpr80nbprfmh.png" alt="" />

              <p className='italic mt-2'>app.tsx contains our app component which is the root component</p>
              <h2 className='mt-6 text-xl md:text-2xl font-bold'> Function Component</h2>
              <p className='mt-2'>To demonstrate a functional component with props we will create Greet Component. It will receive a prop "name" that will welcome the user.</p>
              <img className='mt-2' src="https://res.cloudinary.com/practicaldev/image/fetch/s--be1vtmSF--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/f6ql4cd37anlf7ea35rs.png" alt="pic" />
              <p className='mt-2'>
              While adding props in TypeScript you need to tell typescript what is the type of props you're passed in.
So, way to inform the type of props to typescript is by using "type" keyword.
              </p>

              <img className='mt-2' src="https://res.cloudinary.com/practicaldev/image/fetch/s--ujOsZNvV--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/96xk8hj4d1k98g4k27hk.png" alt="" />

              <p className='mt-2'>Now a component props is an object so within Greetprops object the key will be name and data type is string.</p>
             <p className='mt-2'>To inform typescript about this, after props within parenthesis we specify colon and then type name(Greetprops).</p>
             

       </div>
    </div>
  )
}

export default TypeScriptReact