import { CheckIcon } from '@heroicons/react/20/solid'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import './index.css';
import { Link } from 'react-router-dom';



export default function UserProfile() {
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessagee, setSuccessMessagee] = useState('');
  const [errorMessagee, setErrorMessagee] = useState('');
  const location = useLocation();
  const token = location.state?.token || localStorage.getItem('access_token');

  const [userData, setUserData] = useState({
    photo: '',
    first_name: '', // Corrected the key to match the input field name
    last_name: '',  // Corrected the key to match the input field name
    username: '',
    email: '',
  });
  

 
 

  const fetchUserData = async (token) => {
    try {
      const response = await axios.get(
        'http://127.0.0.1:8000/api/get_user_details/',
        { headers: { Authorization: `Bearer ${token}` } }
      );
     
    
      setUserData(response.data);
    } catch (error) {
      if (error.response) {
      
        console.log('Server responded with:', error.response.data);
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Make a request to update user details or change password
    try {
      const response = await axios.put(
        'http://127.0.0.1:8000/api/update_user_details/',
        userData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setSuccessMessagee('Successfully updated');
      setErrorMessagee(''); // Clear any previous error message
      console.log('User details update successful:', response.data);
    } catch (error) {
      // Handle error
      console.error('Error updating user details:', error);
      if (error.response) {
        setSuccessMessagee('');
        setErrorMessagee(error.response.data.message || 'Failed to update');
        console.log('Server responded with:', error.response.data);
      }
    }
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
  
    // Use actual values entered by the user
    const { current_password, new_password } = userData;
  
    // Make a request to change the password
    try {
      const response = await axios.put(
        'http://127.0.0.1:8000/api/change_password/',
        { current_password, new_password }, // Use the correct field names
        { headers: { Authorization: `Bearer ${token}` } }
      );
      // Handle success
      setSuccessMessage('Password change successful');
      setErrorMessage(''); // Clear any previous error message
      console.log('Password change successful:', response.data);
    } catch (error) {
      // Handle error
      console.error('Error changing password:', error);
      if (error.response) {
        setSuccessMessage('');
        setErrorMessage(error.response.data.message || 'Password change failed');
        console.log('Server responded with:', error.response.data);
      }
    }
  };

  useEffect(() => {
    if (token) {
      fetchUserData(token);
    }
  }, [token]);
  console.log({ token });
  console.log(userData.last_name);
  console.log(userData.first_name);
  console.log(userData.email);

  return (
    
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mt-0 flex items-center justify-end lg:justify-end gap-x-6">

   

<div className="mt-0 flex items-center justify-end lg:justify-end gap-x-6">
  {/* Use Link component here */}
  <Link to="/dashboard">
    <button
      type="button"
      className="rounded-md bg-blue1 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue3"
    >
      Back to Dashboard
    </button>
  </Link>
</div>

  
</div>

      <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
            USER PROFILE
          </p>

          
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none hover:bg-gray-100">
            
          <div className="p-8 sm:p-10 lg:flex-auto ">
            <div className="mt-10 flex items-center gap-x-4 ">
              <h4 className="flex-none text-sm font-semibold leading-6 heading4 "  > Change Personal Details</h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
          
            <form onSubmit={handleFormSubmit} >
      <div className="space-y-12">
      
        <div className="border-b border-gray-900/10 pb-12">

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                First name
              </label>
              <div className="mt-2">
              <input
                  id="first_name"
                  name="first_name"
                  type="text"
                  autoComplete="first_name"
                  value={userData.first_name}
                  onChange={handleInputChange} 
                  className="input block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Last name
              </label>
              <div className="mt-2">
              <input
                  id="last_name"
                  name="last_name"
                  type="text"
                  autoComplete="last_name"
                  value={userData.last_name}
                  onChange={handleInputChange} 
                  className=" input block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            
            
            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={userData.email}
                  onChange={handleInputChange} 
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">

        <button
          type="submit"
          className="rounded-md bg-blue1 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue3"        >
          Update
        </button>
        
      </div>
      {successMessagee && <p className="text-green-600 error">{successMessagee}</p>}
     {errorMessagee && <p className="text-red-600 error" >{errorMessagee}</p>}
    </form>
          </div>
            
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
       
       <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none hover:bg-gray-100">
         <div className="p-8 sm:p-10 lg:flex-auto">
           <div className="mt-10 flex items-center gap-x-4">
             <h4 className="flex-none text-sm font-semibold leading-6 heading4 "  > Change Password</h4>
             <div className="h-px flex-auto bg-gray-100" />
           </div>
           <form onSubmit={handlePasswordChange}>
     <div className="space-y-12">
      

       <div className="border-b border-gray-900/10 pb-12">

         <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
           <div className="sm:col-span-3">
             <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
               Current Password
             </label>
             <div className="mt-2">
               <input
                 type="password"
                 name="current_password"
                 id="current_password"
                 autoComplete="given-name"
                 onChange={handleInputChange}
                 className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
               />
             </div>
           </div>

           <div className="sm:col-span-3">
             <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
               New Password
             </label>
             <div className="mt-2">
               <input
                 type="password"
                 name="new_password"
                 id="new_password"
                 autoComplete="family-name"
                 onChange={handleInputChange}
                 className=" block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
               />
             </div>
           </div>
          
         </div>
       </div>
     </div>

     <div className="mt-6 flex items-center justify-end gap-x-6">

       <button
         type="submit"
         className="rounded-md bg-blue1 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue3"       >
         Update
       </button>
       
     </div>
     {successMessage && <p className="text-green-600 error">{successMessage}</p>}
     {errorMessage && <p className="text-red-600 error" >{errorMessage}</p>}
   </form>
         </div>
           
       </div>
     </div>

    </div>
  );
}
