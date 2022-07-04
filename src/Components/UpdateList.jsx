

import axios from "axios";
import { useEffect, useState } from "react"
import { Form, Col } from "react-bootstrap";
import { getListApi } from "../helpers/apiTest";



export const UpdateList = () => {
  const [data, setPost] = useState({
    Id:0,
    Nombre:""
  });
  const [getList, setGetList] = useState([]);

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
    console.log('userData',userData);
    const urlUpdate = `https://servicios.devaxxess.com.mx/Comex.TI.PortalCliente.WebApi/api/test/update-test?id=${userData.Id}`;
    //Convertir el array para manipulación
    axios({
      method:'PUT',
      url:`${urlUpdate}`,
      auth:{
        username: 'Comex',
        password: 'Comex2017'
    },
    data: userData
      
    });
  }

//   const GetList = async() => {
//     const newMessage =  await getListApi();
//     setGetList(newMessage.data);
    
    
// }
// useEffect(() => {
//   GetList();
// }, [])


  return (
    <div>Formulario 
       
      <form onSubmit={handleSubmit}>
        <label>
          Put Title:
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


        {/* <Form.Group as={Col} controlId="exampleForm" >
            <Form.Label>Tipo</Form.Label>
            <Form.Control as="select"name="FormExample" >
            {
            getList?.map(item => (
            <option value= {item.id} key={item.id} > {item.Nombre} </option>
            ))
        }
            </Form.Control>
        </Form.Group> */}
         
          <button type="submit">Enviar</button>
        </label>
      </form>
    </div>
  )
}

