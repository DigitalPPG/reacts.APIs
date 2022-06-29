import axios from "axios";
import { useState } from "react"



export const Post = () => {
  const [data, setPost] = useState({
    Id:0,
    Nombre:""
  });

  const handleChange = (event) =>{
    const value = event.target.value
    
    setPost({
      ...data,
      [event.target.name] : value
    });
    
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      Id:Number(data.Id),
      Nombre: data.Nombre
      
    }
    
    const urlCreate = `https://servicios.devaxxess.com.mx/Comex.TI.PortalCliente.WebApi/api/test/create-test`;
    //Convertir el array para manipulación

    axios({
      method:'POST',
      url:`https://cors-anywhere.herokuapp.com/${urlCreate}/`,
      headers:{
        'Access-Control-Allow-Origin': '*',
        'origin':'x-requested-with',
        'Access-Control-Allow-Headers': 'POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin',
        'Content-Type': 'application/json'
      },
      data:  userData
      
    })
    

    
    
  }


 


  return (
    <div>Formulario 
      <form onSubmit={handleSubmit}>
        <label>
          Post Title:
          <input 
          type="number" 
          name="Id" 
          id="" 
          onChange={handleChange}
          value={data.Id}
          />
          <input 
          type="text" 
          name="Nombre" 
          id="" 
          placeholder="Introduce Nombre" 
          value={data.Nombre}
          onChange={handleChange} 
          />
         
          <button type="submit">Enviar</button>
        </label>
      </form>
    </div>
  )
}
