import axios from 'axios';
import { useEffect, useState } from "react";

const baseURL = "http://servicios.devaxxess.com.mx/Comex.TI.PortalCliente.WebApi/api/test/hello-message";
// const ObtenerDatos = async() => {
 
//   try{
//       const respuesta = await axios.get('http://servicios.devaxxess.com.mx/Comex.TI.PortalCliente.WebApi/api/test/hello-message',{

//       })
//       if(respuesta.status === 200){

        
// /*         respuesta.data.Data.map(Info => {
//           Infos += `
//             <div class="pelicula">
//               <h3>${respuesta.data.Data}</h3>
//               <h3 class="titulo">${respuesta.data.Data}</h3>
//             </div>
//             `;
//           });

//         document.getElementById('root').innerHTML = Infos; */

//         let Name = `
//         <div><h3>${respuesta.data}</h3></div>
//         `;

//         document.getElementById('root').innerHTML = Name;


//         console.log(respuesta);
//       } 
      
      
//   } 
//     catch(error){
//     alert(error)
//   }
    
// }

//  ObtenerDatos();

export const Post = () => {
    // const [resp, respu] = useState([]);
    // useEffect(() => {
    //     resp().then(data => {
    //        const name1 =  data.languages
    //        console.log(name1);
    //     });
  
    //     console.log();
    //   });
    
      
    
    //   let name1 = [];
    // axios.get('http://servicios.devaxxess.com.mx/Comex.TI.PortalCliente.WebApi/api/test/hello-message')
    // .then(res => {
    //     // Work with the response...
    //     console.log('res',res.data);
    //      name1 = res.data;
         
    // }).catch(err => {
    //     // Handle error
    //     console.log(err);
    // });

    // let [data, getData] = useState('');
    // const url = 'http://servicios.devaxxess.com.mx/Comex.TI.PortalCliente.WebApi/api/test/hello-message';
    // const getAllData =()=>{
    //     axios.get(url).then((resp)=>{
    //         data = resp.data;
    //         console.log(data);
    //     })
    // }
    // getAllData();
    const [post, setPost] = useState(null);

    useEffect( () => {
     axios.get(baseURL).then((response) => {
        if(response.status === 200){
            console.log('200');
            setPost(response.data);
        }else{
            setPost(response.data = 'error');
        }
        
      });
    }, []);
    
      
    return(
        <>
        <div> Componente 1   </div>
        <h1> {post}</h1>
        </>
        
    )
   
}




