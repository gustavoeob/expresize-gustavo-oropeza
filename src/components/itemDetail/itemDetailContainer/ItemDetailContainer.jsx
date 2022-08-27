import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import "./ItemDetailContainer.css"
import ItemDetail from "../itemDetail/ItemDetail"
import Loading from '../../views/loading/Loading'

const ItemDetailContainer = () => {

  const [item, setItem] = useState({});
  const {id} = useParams();
  useEffect(() => {
    
    let products = [{
      id: 1,
      name: "English",
      img: "https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg?cs=srgb&dl=pexels-karolina-grabowska-4491461.jpg&fm=jpg",
      flagIcon: "https://scdn.italki.com/orion/static/flags/us.svg",
      price: 7.99,
      salePrice: 4.99,
      stock: 19,
      isLive: true
    },
    {
      id: 2,
      name: "French",
      img: "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?cs=srgb&dl=pexels-katerina-holmes-5905709.jpg&fm=jpg",
      flagIcon: "https://scdn.italki.com/orion/static/flags/fr.svg",
      price: 9.99,
      stock: 25,
      isLive: true
    },
    {
      id: 3,
      name: "German",
      img: "https://images.pexels.com/photos/5940703/pexels-photo-5940703.jpeg?cs=srgb&dl=pexels-kampus-production-5940703.jpg&fm=jpg",
      flagIcon: "https://scdn.italki.com/orion/static/flags/de.svg",
      price: 12.99,
      stock: 22,
      isLive: true
    },
    {
      id: 4,
      name: "Italian",
      img: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?cs=srgb&dl=pexels-julia-m-cameron-4144923.jpg&fm=jpg",
      flagIcon:"https://scdn.italki.com/orion/static/flags/it.svg",
      price: 9.99,
      stock: 27,
      isLive: true
    },
    {
      id: 5,
      name: "Portuguese",
      img: "https://images.pexels.com/photos/6929164/pexels-photo-6929164.jpeg?cs=srgb&dl=pexels-polina-tankilevitch-6929164.jpg&fm=jpg",
      flagIcon: "https://scdn.italki.com/orion/static/flags/pt.svg",
      price: 8.99,
      stock: 24,
      isLive: true
    },
    {
      id: 6,
      name: "Chinese",
      img: "https://images.pexels.com/photos/6613780/pexels-photo-6613780.jpeg?cs=srgb&dl=pexels-mikhail-nilov-6613780.jpg&fm=jpg",
      flagIcon:"https://scdn.italki.com/orion/static/flags/cn.svg",
      price: 12.99,
      stock: 21,
      isLive: true,
    }]
    setItem(products.find((el) => el.id === id))
    new Promise((resolve) => {
      
      setTimeout(() => {
        // eslint-disable-next-line
        resolve(products.find((el) => el.id == id))
      }, 2000)
      
    }).then((data)=> {
      setItem(data);
    }).catch().finally(() => {setLoading(false)})
  },[id])

  const [loading, setLoading] = useState(true);
  if (loading){
    return <Loading />
  }
  
  return (
    <>
      <div>
        <ItemDetail item={item}/>
      </div>
    </>
  )
}

export default ItemDetailContainer