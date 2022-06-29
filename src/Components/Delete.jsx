// import axios from "axios";
// import { useState } from "react";


// export const Delete = () => {
//     const [data, setPost] = useState  ({
//         Id:0,
//       });
    
//       const handleChange = (event) =>{
//         const value = event.target.value;
        
//         setPost({
//           ...data,
//           [event.target.name] : value
//         });
        
//       }
    
//       const handleSubmit = (event) => {
//         event.preventDefault();
//         const userData = {
//           Id:Number(data.Id)
          
//         }
        
//         const urlDelete = `https://servicios.devaxxess.com.mx/Comex.TI.PortalCliente.WebApi/api/test/delte-test`;
//         //Convertir el array para manipulación
    
//         axios ({
//           method:'DELETE',
//           url:`https://cors-anywhere.herokuapp.com/${urlDelete}/`,
//           headers:{
//             'Access-Control-Allow-Origin': '*',
//             'origin':'x-requested-with',
//             'Access-Control-Allow-Headers': 'POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin',
//             'Content-Type': 'application/json'
//           },
//           data:  userData
          
//         })
//   return (
//     <div>Formulario 
//       <form onSubmit={}>
//         <label>
//           Post Title:
//           <input 
//           type="number" 
//           name="Id" 
//           id="" 
//           onChange={handleChange}
//           value={data.Id}
//           />
         
//           <button type="submit">Enviar</button>
//         </label>
//       </form>
//     </div>
//   )
// }
// }
