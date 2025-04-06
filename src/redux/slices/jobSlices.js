import { createSlice } from "@reduxjs/toolkit";



const initialState={
    jobs:[],
    isLoading:true,
     error:null,
    
}

const jobSlice=createSlice({
    name:"job",
    initialState:initialState,
    reducers:{
        //yüklenme durumu
        setLoading:(state)=>{
            state.isLoading=true;
        },

        //hata durumu
        setError:(state)=>{
            state.isLoading=false;
            state.error=action.payload.message;
        },
        
        //apidan iş verisini al ve reducera ilet
        setJobs:(state,action)=>{
            state.isLoading=false;
            state.error=null;
            state.jobs=action.payload;
        },

        //yeni iş ekle
        createJob:(state,action)=>{
         //action içerisinde gelen payload değerini içerisindeki job dizisine aktar.
         state.jobs.push(action.payload);
        console.log(action)

        },

        //iş si
        deleteJob: (state, action) => {
            //  deleteJob'a gelen id' ile silinecek veriyi state içerisinden bul ve state'den kaldır
      
            // Silinecek elemanın sırasını state içerisinden bul
            const index = state.jobs.findIndex((i) => i.id == action.payload);
      
            // Sırası bilinen elemanı state'den kaldır
            state.jobs.splice(index, 1);
          },
        },
      });
  ;

// Aksiyonları import et
export const {setLoading,setError,setJobs,createJob,deleteJob}=jobSlice.actions;

// Reducerları import et
export default jobSlice.reducer;