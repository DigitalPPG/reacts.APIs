export const getMessage = async() => {
    const url = `http://servicios.devaxxess.com.mx/Comex.TI.PortalCliente.WebApi/api/test/hello-message`;
    const resp = await fetch(url);
    const response = await resp.json();
    console.log(response);
    return response;
}