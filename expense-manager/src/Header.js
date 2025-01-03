import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavItem, Navbar } from 'react-bootstrap';

function Header() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get("http://localhost:8000/api/get")
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <nav
  class=" shadow-lg block w-full max-w-screen-xl px-4 py-2 mx-auto text-black bg-blue3 rounded-xl border-white/80 bg-opacity-80 backdrop-saturate-200 lg:px-8 lg:py-4 ">
  <div class="container flex items-center justify-between mx-auto text-blue-gray-900">
    <a href="#"
      class="mr-4 block cursor-pointer py-1.5 font-sans text-base font-medium leading-relaxed text-inherit antialiased">
      Expense Manager
    </a>
    <div class="hidden lg:block">
      <ul class="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
       
      </ul>
    </div>
    <div class="flex items-center gap-x-1">
      <button
        class="hidden px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
        type="button">
        <span>Log In</span>
      </button>
      <button
        class="hidden select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
        type="button">
        <span>Sign in</span>
      </button>
    </div>
    <button
      class="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
      type="button">
      <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </span>
    </button>
  </div>
</nav> 
  );
}

export default Header;