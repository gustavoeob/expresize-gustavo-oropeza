import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import "./ItemDetailContainer.css"
import ItemDetail from "../itemDetail/ItemDetail"
import Loading from '../../../views/loading/Loading'
import db from '../../../../index'
import {collection, getDocs} from "firebase/firestore"

const ItemDetailContainer = () => {
// State to store the current initial value of item to be updated later
  const [item, setItem] = useState([]);
  const {id} = useParams();

  useEffect(() => {

    const getColData =  async () => {
      try{
        const data = collection(db, 'product-detail');
        const col = await getDocs(data);
        const res = col.docs.map((doc)=> doc={id:doc.id , ...doc.data()});
        const detail = res.find(e => e.id === id);
        setItem(detail)

        setTimeout(() => {
          setLoading(false)
        },1200)
      }catch(e) {
        throw new Error(e)
      }
    }
    getColData()
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





