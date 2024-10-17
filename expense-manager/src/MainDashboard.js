
import axios from 'axios';
import React, { Component } from 'react';
import {useCookies} from 'react-cookie'


class MainDashboard extends Component {

    
    state = {
      todos: []
      
    };


    
    
    
    async componentDidMount() {
        const { cookies } = this.props;
        const myemail = cookies.get('myemail');

        console.log(myemail);
        try {
          const res = await fetch('http://127.0.0.1:8000/api/'); // fetching the data from api, before the page loaded
          const todos = await res.json();
          
        
          
          this.setState({
            todos
          });
        } catch (e) {
          console.log(e);
        }
      }



      render() {




  return (
    <body className=' min-h-screen background'>

      <div> 

      <button class=" container mx-auto text-4xl text-balance bg-blue3  greeting " >Hey there, Eranga   </button>
      
      <button type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 button1">ADD EXPENSES</button>
      <button type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 button1">ADD INCOMES</button>
      <button type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 button2">ADD CATEGORIES</button>

      <button type="button" class="text-white  hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 label1">Your past EXPENSES and INCOMES</button>
     

      
      
      </div>

      

<div class="">
<label class="bg-blue3 text-blue  label01"> EXPENSES</label>
    <table class="w-full text-sm text-left rtl:text-right text-blue3 dark:text-blue table1">
    
        <thead class="text-xs text-blue uppercase bg-blue3 dark:bg-blue3 dark:text-blue1">
            <tr>
                <th scope="col" class="px-6 py-3 rounded-s-lg">
                    
                </th>
                <th scope="col" class="px-6 py-3">
                    Description
                </th>
                <th scope="col" class="px-6 py-3 rounded-e-lg">
                    Expenses
                </th>
            </tr>
        </thead>
        <tbody>
        {this.state.todos.map(item => (
          
           
            <tr class="bg-white dark:bg-blue">
          
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
               
                </th>
                <td class="px-6 py-4">
                {item.title}
                </td>
                <td class="px-6 py-4">
                {item.description}
                </td>
            </tr>
         
        ))}
            <tr class="bg-white dark:bg-blue">
          
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    1
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
            </tr>
            <tr class="bg-white dark:bg-blue">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    1
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                   1
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
            </tr>
        </tbody>
        <tfoot>
            <tr class="font-semibold text-gray-900 dark:text-white">
                <th scope="row" class="px-6 py-3 text-base">Total</th>
                <td class="px-6 py-3">3</td>
                <td class="px-6 py-3">21,000</td>
            </tr>
        </tfoot>
    </table>
</div>



<div class="">
<label class="bg-blue3 text-blue  label02"> INCOMES</label>
    <table class="w-full text-sm text-left rtl:text-right text-blue3 dark:text-blue table2">
    
        <thead class="text-xs text-blue uppercase bg-blue3 dark:bg-blue3 dark:text-blue1">
            <tr>
                <th scope="col" class="px-6 py-3 rounded-s-lg">
                    
                </th>
                <th scope="col" class="px-6 py-3">
                    Description
                </th>
                <th scope="col" class="px-6 py-3 rounded-e-lg">
                    Incomes
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white dark:bg-blue">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    1
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
            </tr>
            <tr class="bg-white dark:bg-blue">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    1
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                   1
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
            </tr>
        </tbody>
        <tfoot>
            <tr class="font-semibold text-gray-900 dark:text-white">
                <th scope="row" class="px-6 py-3 text-base">Total</th>
                <td class="px-6 py-3">3</td>
                <td class="px-6 py-3">21,000</td>
            </tr>
        </tfoot>
    </table>
</div>


    </body>
  );
}
}

export default MainDashboard;