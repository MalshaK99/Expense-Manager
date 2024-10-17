import React, { useState, useEffect } from 'react';
import axios from 'axios';

function example1() {
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
    <div>
      <h1>Hello, World! hi hi</h1>
      <p>{message}</p>
    </div>
  );
}

export default example1;