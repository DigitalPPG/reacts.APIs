import axios from 'axios';
import { useEffect, useState } from 'react';
import { getAllData } from '../helpers/apiTest';
import { getMessage } from '../helpers/getMessage';
export const Get = () => {
    
    // const [post, setPost] = useState(null);

    // useEffect( () => {
    //  axios.get(baseURL).then((response) => {
    //     if(response.status === 200){
    //         console.log('200');
    //         setPost(response.data);
    //     }else{
    //         setPost(response.data = 'error');
    //     }  
    //   });
    // }, []);
    /////////////////////////////////////////////////////////////////////////////////////
    const [message, setMessage] = useState([]);
    const getNewMssage = async()=>{
        const newMessage = await getAllData();
        setMessage(newMessage);

    }
    console.log('message',getAllData());
    useEffect(()=>{
        getNewMssage();
    },[]);
    ///////////////////////////////////////////////////////////////////////////////////////
    

    // const [message, setMessage] = useState('');

    // const getNewMssage = async()=>{
    //     const newMessage =  await getAllData();
    //     console.log(newMessage);
    //     setMessage(newMessage);
        
    // }
    // useEffect(()=>{
    //     getNewMssage();
    // },[]);
    
      
    return(
        <>
        <div> Componente   </div>
        <h1> texto{message}</h1>
        </>
        
    )
   
}




