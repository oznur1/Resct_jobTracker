import React from 'react'
import Input from './Input';
import "./create.scss"
import Select from './Select';
import { statusOptions,typeOptions } from '../../constants/constant';
import api from "../../../utils/api"
import { useDispatch } from 'react-redux';
import { createJob } from '../../redux/slices/jobSlices';
import {useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

const Create= () => {
  // navigation kurulumu
  const navigation = useNavigate();
  
  //dispatch kurlumu
  const dispatch=useDispatch();

  //form gönderildiğinde oluşacak fonk
  const handleSubmit=(e)=>{
    
    //sayfa yenilemesini engelle
     e.preventDefault

     //inputlara form data ile eriş
     const formData=new FormData(e.target)

     //formdata içerisindeki değerleri nesneye çevir
      const jobData=Object.fromEntries(formData.entries())
      
      //güncel tarihe eriş
      jobData.date=Date.now();
    

      //api istek at ve eğer başarılı ise reduer'a haber ver
      api.post("/jobs")
      .then((res)=>{
        dispatch(createJob(res.data))
       //Kullanıcıya bildirim gönder
       toast.success("Başvuru oluşturuldu");

       // Eğer işlem başarılı ise home sayfasına yönlendir
       navigation("/");
     })
     .catch((err) => {
       // Hata durumunda kullanıcıya bildirimde bulun
       toast.error(`Başvuru sırasında bir sorun oluştu: ${err.message} `);
     });
 };
  
  
  
  return (
    <div className='add-page'>
      <section className='container'>
      {/* Title */}
      <h2>Yeni İş Ekle</h2>

      {/* Form */}
      <form onSubmit={handleSubmit}>
      <Input label="Pozisyon" name="position"/>
      <Input label="Şirket" name="company"/>
      <Input label="Lokasyon" name="location"/>
     <Select label="Durum" name="status" options={statusOptions}/>
      <Select label="Tür" name="type" options={typeOptions}/>
      
      <div className="btn-wrapper">
           <button className="button">Oluştur</button>
          </div>
      </form>
      </section>
    </div>
  )
}

export default Create;
