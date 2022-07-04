import axios, { Axios } from 'axios'
import React from 'react'

export const TestAuth = () => {

    axios.get('https://servicios.devaxxess.com.mx/Comex.TI.PortalCliente.WebApi/api/test/hello-message',{
        headers: {
          'Authorization': "Basic Q29tZXg6Q29tZXgyMDE3",
          // 'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
          // 'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
          // 'Access-Control-Expose-Headers': 'Content-Length, X-JSON',
          // 'Access-Control-Allow-Origin': '*',
          // 'Content-Type': 'application/x-www-form-urlencoded'
          },
          // auth:{
          //   username:'Comex',
          //   password:'Comex2017'
          // }
        
        // headers :{
        //     
            
        // },

    }).then( resp => {
      if(resp.status === 200){

    console.log('resp200',resp);
      }
        
    } )
    // const res = axios.get('https://dog.ceo/api/breeds/list/all',{
    //     auth : {
    //         username :'Comex',
    //         password :'Comex2017'
    //     },
    //     // headers:{
    //     //     'Access-Control-Allow-Origin': '*',
    //     //     'Access-Control-Expose-Headers': 'Content-Length, X-JSON',
    //     //     'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    //     //     'Access-Control-Allow-Headers': 'Content-Type, Authorization, Accept, Accept-Language, X-Authorization',
    //     //     'Content-Type': 'application/x-www-form-urlencoded'
    //     // }
        
    // })

    // console.log('res',res);
  return (
    <div>TestAuth</div>
  )
}
