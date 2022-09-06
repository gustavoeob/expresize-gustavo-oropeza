import {useEffect, useState} from 'react'
import "./ItemListContainer.css"
import ItemList from "../itemList/ItemList"
import Loading from "../../../views/loading/Loading"

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  
/* A promise that is resolving after 2 seconds. */
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
    }];
    new Promise((resolve) => {
      
      setTimeout(() => {
        resolve(products)
      }, 2000)
      
    }).then((data)=> {
/* Setting the state of the items array to the data that is returned from the promise. */
      setItems(data);
/* The `finally` method returns a Promise. It will be invoked regardless of whether the promise is
fulfilled or rejected. */
    }).catch().finally(() => {setLoading(false)})
    
  },[])
  
/* Setting the loading state to true and if it is true, it will return the loading component. */
  const [loading, setLoading] = useState(true);
  if (loading){
    return <Loading />
  }
  
  return (
    <div className="main-container">
      <h4 className="courses-title">Courses</h4>
      {items.length ? 
      <ItemList items={items} /> :
      setLoading(true)}
      </div>
  )
}

export default ItemListContainer