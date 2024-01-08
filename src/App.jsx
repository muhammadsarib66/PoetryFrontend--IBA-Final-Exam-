import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import MyForm from './pages/MyForm';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes , Route } from 'react-router-dom';
import ViewAllPoetry from './pages/ViewAllPoetry';

const App = () => {
  const dispatch = useDispatch() ;
  const state = useSelector(state =>state.show)

  console.log(state)
  return (
    <div className=' h-screen'>
      <Navbar/>
      <Router>
        <Routes>
          <Route path='/' element={<ViewAllPoetry/>}/>
          <Route path='/add' element={<MyForm/>}/>
        </Routes>

      </Router>
      {/* <MyForm/> */}
      {/* <ViewAllPoetry/> */}
      {/* <p> Hello world</p> */}
    </div>
  )
}

export default App