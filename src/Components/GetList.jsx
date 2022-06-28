import { useEffect, useState } from "react"
import { getListApi } from "../helpers/apiTest"






export const GetList = () => {
    const [getList, setGetList] = useState([]);

    const GetList = async() => {
        const newMessage =  await getListApi();
        console.log(newMessage);
        setGetList(newMessage.data);
        
    }
    useEffect(() => {
        GetList();
    }, [])
  return (
    <>
   <div >
      {getList.map((list) => (
        <div key={list.Id} >{list.Nombre}</div>
      ))}
    </div>
    </>
  )
}
