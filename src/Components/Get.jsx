import axios from 'axios';
import { useEffect, useState } from 'react';
import { getMessageTest } from '../helpers/apiTest';
import { getMessage } from '../helpers/getMessage';
import { GetList } from './GetList';
import { Post } from './Post';
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

    // const [message, setMessage] = useState([]);

    // const url = `http://servicios.devaxxess.com.mx/Comex.TI.PortalCliente.WebApi/api/test/hello-message`;
    // const getAllData = () => {

    //     axios.get(url).then((response) =>{
    //        setMessage(response.data)
    //    });
       
    //    }
    //    getAllData();
    
    
    ///////////////////////////////////////////////////////////////////////////////////////
    

    const [message, setMessage] = useState([]);

    const getNewMssage = async()=>{
        const newMessage =  await getMessageTest();
        console.log(newMessage);
        setMessage(newMessage.data);
        
    }
    useEffect(()=>{
        getNewMssage();
    },[]);
    
      
    return(
        <>
        <div> Componente Get   </div>
        <h1> {message}</h1>
        <GetList></GetList>
        <Post></Post>
        
        </>
        
    )
   
}




