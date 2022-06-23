import axios from 'axios';
let Infos ="";

const ObtenerDatos = async() => {
 
  try{
      const respuesta = await axios.get('http://servicios.devaxxess.com.mx/Comex.TI.PortalCliente.WebApi/api/test/get-list',{

      })
      if(respuesta.status === 200){

        
/*         respuesta.data.Data.map(Info => {
          Infos += `
            <div class="pelicula">
              <h3>${respuesta.data.Data}</h3>
              <h3 class="titulo">${respuesta.data.Data}</h3>
            </div>
            `;
          });

        document.getElementById('root').innerHTML = Infos; */

        let Name = `
        <div><h3>${respuesta}</h3></div>
        <div><h3>${respuesta}</h3></div>
        `;

        document.getElementById('root').innerHTML = Name;


        console.log(respuesta);
      } 
      
      
  } 
    catch(error){
    alert(error)
  }
    
}

ObtenerDatos();