import {useEffect, useState} from 'react'
import "./ItemListContainer.css"
import ItemList from "../itemList/ItemList"
import Loading from "../../../views/loading/Loading"
import db from "../../../../index"
import {collection, getDocs} from "firebase/firestore"

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    const getColData =  async () => {
      try{
        const data = collection(db, 'products-list')
        const col = await getDocs(data)
        const res = col.docs.map((doc)=> doc={id:doc.id, ...doc.data()})
        setItems(res)

        setTimeout(() => {
          setLoading(false)
        })
      }catch(e) {
        console.log(e)
      }
    }
    getColData()
  },[])

/* Setting the loading state to true and if it is true, it will return the loading component. */
  const [loading, setLoading] = useState(true);
  if (loading){
    return <Loading />
  }
  
  return (
    <div className="main-container">
      <p className="courses-title">Courses 📚</p>
      {items.length > 0 ? 
      <ItemList items={items} /> :
      setLoading(true)} 
      </div>
  )
}

export default ItemListContainer