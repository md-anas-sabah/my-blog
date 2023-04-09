import React from 'react'
import logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'
import then from '../assets/then.png'
import consume from '../assets/consume.png'
import pr from '../assets/producer.png'

const LifeCyclePage = () => {


  return (
    <div className='px-10 py-5'>
        <div>
          <img className="h-60 md:h-[26rem] object-fill w-full" src="https://res.cloudinary.com/practicaldev/image/fetch/s--RDdxoyBw--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/g1gg7j4clkbh0i84eka7.png" alt="logo" />
          <div className='mt-1 flex flex-row gap-x-1'>
            <img className='h-8 w-8 rounded-full' src={logo}alt="logo" />
            <div>
              <p className='text-[12px] font-semibold'>Md Anas Sabah</p>
              <p className='text-[8px] text-gray-400'>Posted on 04 April 2023</p>
            </div>
          </div>
        </div>
        <div className='px-5 py-3 text-[10px] md:text-base md:w-96 justify-center bg-gray-900 flex items-center rounded-full text-center text-[#F7AB0A] mt-3 '>
          <Link to="https://dev.to/mdanassabah/life-cycle-of-a-component-56cp">
             <p>Check this out on Dev.to</p>
          </Link>
        </div>
        <div className='mt-4'>
            <h1 className='text-2xl md:text-4xl font-bold'>Callback Hell and Promises</h1>
            <p className='mt-1'>For understanding the concept of Callback Hell, I think you should know about Callback.</p>
            <h2 className='mt-2 text-xl font-bold'>What is Callback?</h2>
            <p className='mt-1'>Callback is a powerful way to do asynchronous thing in JavaScript. It is a function which is to be executed after another function has finished execution.</p>

            <p className='mt-3'>Suppose, we have an E-commerce Application where we have createOrder and proceedToPayment function which have to execute one after another respectively.
              We have dependency between those two , We can manage those dependency in our code using callback because it's an async operation.</p>
            <img className='mt-3 md:w-[40rem]' src="https://res.cloudinary.com/practicaldev/image/fetch/s--RXqFvXQy--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gc8fna4lylixczsill3l.png" alt="a" />
            <p className='mt-1 italic'>When JavaScript Engine executes this code it will just call the createOrder api.
            Now it is responsibility of createOrder function to callback proceedToPayment api</p>
            <h2 className='mt-2 text-xl font-bold'>Issues with Callback</h2>
             <p>1. Inversion of Control</p> 
             <p>2. Callback Hell</p> 

             <h2 className='mt-2 text-xl font-bold'>Inversion of Control</h2> 
             <p className='mt-1'>Inversion of control is like you loose the control of code when you are using callback.</p>

             <h2 className='mt-2 text-xl font-bold'>Callback Hell</h2>
             <img className='mt-2' src="https://res.cloudinary.com/practicaldev/image/fetch/s--Yp81Gz0C--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/z52zdyiqmfesx63ggc8s.png" alt="b" />

             <p className='mt-1'>You are seeing now a nesting of functions here and code also looks scary and this is what we called <b>Callback Hell.</b> For a big application it creates more nesting.</p>

            <img className='mt-2 md:w-[40rem]' src="https://res.cloudinary.com/practicaldev/image/fetch/s--BO6Kp-XP--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/chjtb7l3lptzundml1in.jpeg" alt="c" />

            <p className='mt-2'>To avoid this, we will see now <b>Promises</b>.</p>
            <h2 className='mt-2 text-xl font-bold'>Promise</h2>
            <p className='mt-2' >To fix the issue of Inversion of Control and Callback Hell, ES6(ECMAScript 6) Promise is the easier way to work with asynchronous programming in JavaScript.</p>
            <p className='mt-1 italic font-semibold'>A promise acts as a container for a future value.</p>

            <p className='mt-2'>For Example: <span className='text-[10px] md:text-sm bg-black text-white px-2 w-52 md:w-72 rounded-md'>const promise = createOrder(cart)</span></p>
            <p className='mt-2'>Whenever JavaScript engine executes this line, this createOrder api will return us a promise.(Promise is nothing but an empty object) and program will just go on and execute.
            But after fetching data from API, promise object get filled automatically.</p>

            <h2 className='mt-2 text-xl font-bold'>Now how will we attach our callback to that promise?</h2>
            <p className='mt-2'>We will use <span className='font-bold'>.then</span> method.</p>
            <img className='mt-2 md:w-[40rem]' src={then} alt="d" />
            <p className='mt-1'>This callback function runs automatically after fetching data from api in the promise object.</p>

           <p className='mt-3 font-bold italic'>A Promise is an object representing the eventual completion or failure of an asynchronous operation.</p>
            <p className='mt-2'>There are three states of promise:</p>
            <p className='mt-1'>1.pending</p>
            <p className='mt-1'>2.fulfilled</p>
            <p className='mt-1'>3.rejected</p>

            <h2 className='mt-2 text-xl font-bold'>Promise Chaining</h2>
            <p className='mt-1'>Taking example of callback hell we can also do promise chaining</p>
            <img className='mt-2 md:w-[40rem]' src="https://res.cloudinary.com/practicaldev/image/fetch/s--4z7KfLPY--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mdt568rjsehc3qzicb3g.png" alt="e" />

            <p className='italic mt-1'>We always return a promise from a promise, when we are chaining it</p>

            <h2 className='mt-2 text-xl font-bold'>Create a Promise</h2>
            <p className='mt-1 font-semibold'>Consumer Part</p>
            <img className='mt-2 md:w-[40rem]' src={consume} alt="c" />
            <p className='mt-4 font-semibold'>Producer Part</p>
            <img className='mt-2 md:w-[40rem]' src={pr} alt="c" />

            <p className='mt-3'>That's it!!</p>



       </div>
    </div>
  )
}

export default LifeCyclePage