import React, { useEffect } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Create from './pages/Create'
import Header from './components/Header'
import { useDispatch } from 'react-redux'
import { setError, setJobs, setLoading } from './redux/slices/jobSlices'
import api from '../utils/api'

const App = () => {
const dispatch=useDispatch();
  //apidan iş verilerini al ve reducera ilet
  useEffect(()=>{
//reducerdaki yüklenme durumunu ayarla
dispatch(setLoading());

 //apia istek at ve istek başarılı olursa verileri reducera ilet
  api.get("/jobs")
  //istek başarılı olursa reducer'a jobs verisini gönder
  .then((res)=>dispatch(setJobs(res.data)))
  //istek başarısız olursa reducer'a hatayı gönder
  .catch((err)=>dispatch(setError(err)))

},[])
  return (
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/create' element={<Create/>}/>
   </Routes>
   
   </BrowserRouter>
  )
}

export default App
