

import axios from "axios";
import { useEffect, useState } from "react"
import { Form, Col, Button, Row } from "react-bootstrap";
import { getListApi } from "../helpers/apiTest";
import 'bootstrap/dist/css/bootstrap.min.css'


export const Delete = () => {
  const [data, setPost] = useState({
    Id:0
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
    event.stopPropagation();
    const userData = {
      Id:Number(data.Id),
      
    }    
    console.log('userData',userData);
    const urlDelete = `https://servicios.devaxxess.com.mx/Comex.TI.PortalCliente.WebApi/api/test/delte-test?id=10`;
    //Convertir el array para manipulación
    axios({
      method:'DELETE',
      url:`${urlDelete}`,
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
        <Form onSubmit={handleSubmit} >
        <Row className="align-items-center">
            
            
        <Form.Group>
            <Form.Label>Method Delete</Form.Label>
            <Col xs={1} >
            <Form.Control 
                type="number"
                name="Id"
                onChange={handleChange}
                value={data.Id}
            />
            </Col>
            <Col xs="auto">
          <Button type="submit"  variant="outline-danger">Eliminar</Button> 
          </Col>
          </Form.Group>
          
          
          
          

        </Row>
       
        </Form>
       
       
    

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
         
         
         
          
        
      
    </div>
  )
}

