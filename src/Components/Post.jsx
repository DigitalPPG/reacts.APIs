import axios from "axios";
import { useState } from "react"



export const Post = () => {
  const [data, setPost] = useState({
    Id:0,
    Nombre:""
  });

  const handleChange = (event) =>{
    const value = event.target.value
    console.log(event.target.value);
    setPost({
      ...data,
      [event.target.name] : value
    });
    console.log('data',data);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      Id:Number(data.Id),
      Nombre: data.Nombre
      
    }
    
    const url = `http://servicios.devaxxess.com.mx/Comex.TI.PortalCliente.WebApi/api/test/create-test`;
    //Convertir el array para manipulación
    
    const newFormart = JSON.stringify(userData);
    console.log('userDataConver', JSON.stringify(userData));
    axios.post(url,newFormart).then((response) => {
      console.log(response);
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
