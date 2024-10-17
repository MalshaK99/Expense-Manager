import React, { useState, useEffect } from 'react';
import axios from 'axios';
import bg from './assets/bg.jpg';
import { toast } from 'react-hot-toast';

function UDIncome(props) {

  //bg image
  const bgimg = {
    backgroundImage: `url(${bg})`,
  };
  //bg color
  const ashColor = 'rgba(70, 70, 70, 0.5)';
  const bgclr = {
    backgroundColor: ashColor,
  };

  // crud operation start
  const [incomes, setIncomes] = useState([]);
  const [income, setIncome] = useState({});
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch all categories
    axios.get('http://127.0.0.1:8000/api/api/category/')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });

    // get target income
    axios.get('http://127.0.0.1:8000/api/api/income/')
      .then(response => {
        setIncomes(response.data);
        if (response.data) {
          response.data.forEach(i => {
            if (props.id == i.Iid) {
              setIncome(i)
            }
          })
        }
      })
      .catch(error => {
        console.error('Error fetching incomes:', error);
      });
  }, []);

  //delete and update operations
  const handleSubmit = (e) => {
  switch (props.btnValue) {
    case 'Delete Income':

        // Send a DELETE request to delete the income
        axios.delete(`http://127.0.0.1:8000/api/api/income/${props.id}/`)
          .then(response => {
            console.log('Income deleted successfully:', response.data);
            //clear textfeilds
            setIncome({
              User_email: props.email,
              IAmount: '',
              INote: '',
              Category_name: 'Select Categoty',
              IDate: ''
            });
            console.log('sucess');
          })
          .catch(error => {
            console.error('Error deleting income:', error);
          });
      break;

    case 'Update Income':
        e.preventDefault();
        axios.put(`http://127.0.0.1:8000/api/api/income/${props.id}/`, income)
          .then(response => {
            console.log('Income updated successfully:', response.data);
            //clear textfeilds
            setIncome({
              User_email: props.email,
              IAmount: '',
              INote: '',
              Category_name: 'Select Categoty',
              IDate: ''
            });
            console.log('sucess');
          })
          .catch(error => {
            console.error('Error updating income:', error);
          });
      break;

    default:
      console.log('Unknown button clicked');
      break;
  }
  
};






  return (

    <div className="bg-fixed bg-cover bg-center bg-no-repeat" style={bgimg}>
      <div class='h-full w-full flex flex-row text-base' style={bgclr}>

        <div className="sm:w-1/12 md:w-2/12 lg:w-3/12 h-full overflow-y-auto"></div>

        <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 h-full overflow-y-auto">
          <div class="lg:max-w-full rounded-xl overflow-hidden shadow-lg mx-3 my-6 bg-Light1 border-2 border-dark2">
            <div class="lg:max-w-full bg-dark1">
              <center><p class="p-3 text-2xl text-white font-bold">{props.topic}</p></center>
            </div>
            <hr class="border-dark2" />
            <form class="w-full" onSubmit={handleSubmit} method='POST'>
              <div class="px-6 py-3 pb-6">
                <div class="items-center border-b border-dark1 py-2">
                  <label class="block uppercase text-gray-700 font-bold mb-2">Amount</label>
                  <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="number" placeholder="Enter Amount" name='amount' value={income.IAmount} onChange={(e) => setIncome({ ...income, IAmount: e.target.value })} />
                </div>
                <br />
                <div class="items-center border-b border-dark1 py-2">
                  <label class="block uppercase text-gray-700 font-bold mb-2">Description</label>
                  <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Enter Description" name='note' value={income.INote} />
                </div>
                <br />
                <div class="items-center ">
                  <label class="block uppercase text-gray-700 font-bold mb-2">Select Category</label>
                  <div class=" relative">
                    <select class="block appearance-none w-full bg-white border border-dark1 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" name='category' value={income.Category_name}>
                      <option>Select Categoty </option>
                      {categories.map(category => (
                        <option key={category.Name} value={category.Name}>
                          {category.Name}
                        </option>
                      ))}
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                  </div>
                </div>
                <br />
                <div class="items-center border-b border-dark1 py-2">
                  <label class="block uppercase text-gray-700 font-bold mb-2">Date</label>
                  <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="date" placeholder="Enter Description" name='date' value={income.IDate} />
                </div>
              </div>
              <hr class="border-dark2" />
              <div class="py-5">
                <center><input class="flex-shrink-0 bg-dark1 hover:bg-dark2 border-dark1 hover:border-dark2border-4 text-white text-xl py-2 px-6  rounded" type="submit" name={props.btnValue} value={props.btnValue} />
                </center>
              </div>
            </form>
          </div>
        </div>
        <div className="sm:w-1/12 md:w-2/12 lg:w-3/12 h-full overflow-y-auto"></div>
      </div>
    </div>
  );

}

export default UDIncome;
