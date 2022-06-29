import axios from "axios"

const url = `https://servicios.devaxxess.com.mx/Comex.TI.PortalCliente.WebApi/api/test/hello-message`;
const urlGetList = 'https://servicios.devaxxess.com.mx/Comex.TI.PortalCliente.WebApi/api/test/get-list';

export const getMessageTest = async()=>{
    return await axios.get(url);
   
}

export const getListApi = async () => {
    return await axios.get(urlGetList)
}

export const Post = async() =>{
    return await axios.post(url)
}

