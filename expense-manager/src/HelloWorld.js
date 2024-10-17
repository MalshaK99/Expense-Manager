import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HelloWorld() {
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
    <body className='bg-blue min-h-screen'>
      <div> 

      <button class=""> </button>

      
      
      </div>

    </body>
  );
}

export default HelloWorld;