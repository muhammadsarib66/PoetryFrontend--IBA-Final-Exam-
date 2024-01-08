import React from 'react';
import { useSelector , useDispatch } from 'react-redux'

const poetryData = [
  { id: 1, name: 'Poem 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 2, name: 'Poem 2', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { id: 3, name: 'Poem 3', content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
  // Add more poetry data as needed
];

const ViewAllPoetry = () => {
  const dispatch = useDispatch() ;
  const {users} = useSelector(state =>state.show)
  console.log(users)
  return (
    <div className="container px-10 pt-8 bg-green-300 h-screen ">
      <h2 className="text-3xl font-semibold mb-6 text-center">View All Poetry</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-content-center  lg:grid-cols-4 xl:grid-cols-5 gap-6 ">
        {users.map((poem,index) => (
          <div key={index} className="bg-white p-6 rounded-md shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold mb-4 text-blue-500">{poem.poet}</h3>
            <p className="text-gray-700">{poem.data}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewAllPoetry;
