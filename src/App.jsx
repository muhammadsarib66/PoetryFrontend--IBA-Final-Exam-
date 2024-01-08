import React, { useEffect } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import MyForm from './pages/MyForm';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes , Route } from 'react-router-dom';
import ViewAllPoetry from './pages/ViewAllPoetry';
import { getUsers } from './features/Slicer';

const App = () => {
  const dispatch = useDispatch() ;
  const state = useSelector(state =>state.show)

  console.log(state)
  useEffect(() => {
    dispatch(getUsers())
  },[])


  return (
    <div className=' h-screen'>
      <Navbar/>
      <MyForm/>
      <Router>
        <Routes>
          <Route path='/' element={<ViewAllPoetry/>}/>
          <Route path='/add' element={<MyForm/>}/>
        </Routes>

      </Router>
      {/* <ViewAllPoetry/> */}
      {/* <p> Hello world</p> */}
    </div>
  )
}

export default App