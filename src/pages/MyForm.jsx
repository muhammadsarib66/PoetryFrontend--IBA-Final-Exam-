import axios from 'axios';
import React, { useState } from 'react';

const MyForm = () => {
 const [poetName, setPoetName] = useState('');
 const [poetry, setPoetry] = useState('');

  
 const sendData = () =>{
    axios.post('https://backend-poetry-api-iba-final.vercel.app/api/v1/createPoetry',{
      poet:poetName,
      data:poetry
    }).then(()=>{
      alert('success')
    }).catch(()=>{
      alert('error')
    })
    setPoetName('');  
    setPoetry('');
    }
 

  const handleSubmit = (e) => {
    e.preventDefault();
    sendData()
    console.log('Form submitted:', sendData);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <div className='flex justify-center'>

          <h1 className='font-bold text-3xl '> ADD YOUR POETRY</h1>
          </div>
          <label htmlFor="name" className="block text-gray-600 font-semibold mb-2">
            Poet Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={poetName}
            onChange={(e)=>setPoetName(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter your Poet name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="data" className="block text-gray-600 font-semibold mb-2">
            Poetry:
          </label>
          <input
            type="text"
            id="data"
            name="data"
            value={poetry}
            onChange={(e)=>setPoetry(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter your Poetry"
            required
          />
        </div>
        <button
          type="submit"
          
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default MyForm;
