import axios from "axios"

const url = `http://servicios.devaxxess.com.mx/Comex.TI.PortalCliente.WebApi/api/test/hello-message`;


export const getAllData = () => {
 const resp = axios.get(url).then((response) =>{
   console.log('respuesta',response);
  
//    this.respGet = response;
});
}

