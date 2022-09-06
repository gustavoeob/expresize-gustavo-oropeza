import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import "./ItemDetailContainer.css"
import ItemDetail from "../itemDetail/ItemDetail"
import Loading from '../../../views/loading/Loading'
import products from "../../../db/products.json"

const ItemDetailContainer = () => {
// State to store the current initial value of item to be updated later
  const [item, setItem] = useState([]);

  const {id} = useParams();
  useEffect(() => {
    
    // Store the find operation to match the object element with id in a variable to use it in line 105
    const selectedCourse = products.find((e) => e.id == id)
    setItem(selectedCourse)
    new Promise((resolve) => {
      // This Promise is running with setTimeout() this code will be skipped to the next task to execute 
      setTimeout(() => {
        // eslint-disable-next-line
        resolve(selectedCourse)
      },2000)
      
    }).then((data)=> {
      setItem(data);
    }).finally(() => {setLoading(false)})
  },[id])
// Shows loading spinner and simulates delay when true and when the setTimeout countdown finishes the setItem state is updated with data and the setLoading updates loading to false.
  const [loading, setLoading] = useState(true);
  if (loading){
    return <Loading />
  }
  
  return (
    <>
      <div>
        {/* The attribute item sets the id found and sends it as props to ItemDetail.jsx */}
        <ItemDetail item={item}/>
      </div>
    </>
  )
}

export default ItemDetailContainer






 