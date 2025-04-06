

import React from 'react'
import { useSelector } from 'react-redux';
import Loader from '../../components/Loader';
import Error from '../../components/Error';
import Card from '../Create/Card';
import "./home.scss"
import Filter from "./Filter";
const Home = () => {
  //store abone ol ve jobs verisini console yazdır
  const {isLoading,jobs,error} =useSelector((store)=>store.jobReducer)
  


  return (
    <div className='home-page'>
      {/* Filter */}
      <Filter/>

    {/* Job Data */}
   
   {/* Loading */}
   {isLoading ? (  
<Loader/>
   ): error ?( 
    <Error/>
    ) :(
   
      <div className="cards-wrapper">
          {jobs.length === 0 ? (
            <p className="warn">Aranılan Kriterlere Uygun Başvuru Bulunamadı</p>
          ) : (
            jobs.map((job) => <Card key={job.id} job={job} />)
          )}
        </div>
   
  )}
    </div>
  )
}

export default Home;
