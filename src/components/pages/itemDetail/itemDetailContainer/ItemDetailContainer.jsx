import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import "./ItemDetailContainer.css"
import ItemDetail from "../itemDetail/ItemDetail"
import Loading from '../../../views/loading/Loading'

const ItemDetailContainer = () => {
// State to store the current initial value of item to be updated later
  const [item, setItem] = useState([]);

  const {id} = useParams();
  useEffect(() => {
    
    let products = [{
      id: 1,
      name: "English",
      level: "A1",
      img:["https://images.pexels.com/photos/415999/pexels-photo-415999.jpeg?cs=srgb&dl=pexels-pixabay-415999.jpg&fm=jpg",
          "https://images.pexels.com/photos/4353813/pexels-photo-4353813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/887849/pexels-photo-887849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/4390589/pexels-photo-4390589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"],
      flagIcon: "https://scdn.italki.com/orion/static/flags/us.svg",
      price: 7.99,
      salePrice: 4.99,
      stock: 19,
      isLive: true,
      description: "This is a basic level course where participants are introduced to communication skills in the English language, including simple greetings and introductions, exchanging personal information, and talking about work and family. This course also helps participants develop the skills they need to use the English language in routine, everyday activities such as: banking, health, parenting and school participation, recreation, and social interactions."
    },
    {
      id: 2,
      name: "French",
      level: "A1",
      img:["https://images.pexels.com/photos/2739078/pexels-photo-2739078.jpeg?cs=srgb&dl=pexels-guillaume-meurice-2739078.jpg&fm=jpg",
       "https://images.pexels.com/photos/2344/cars-france-landmark-lights.jpg?cs=srgb&dl=pexels-pixabay-2344.jpg&fm=jpg",
        "https://images.pexels.com/photos/3250358/pexels-photo-3250358.jpeg?cs=srgb&dl=pexels-alex-azabache-3250358.jpg&fm=jpg",
         "https://images.pexels.com/photos/2135/food-france-morning-breakfast.jpg?cs=srgb&dl=pexels-pixabay-2135.jpg&fm=jpg"],
      flagIcon: "https://scdn.italki.com/orion/static/flags/fr.svg",
      price: 9.99,
      stock: 25,
      isLive: true,
      description: "This course will allow you, as a student, to get started in the French language and culture from a basic level, studying the grammar, vocabulary and expressions of the language. Through this course, you will also explore key words, sentences and phrases in order to establish a conversation. This will help you handle everyday situations as naturally as possible."
    },
    {
      id: 3,
      name: "German",
      level: "A1",
      img:["https://images.pexels.com/photos/4676419/pexels-photo-4676419.jpeg?cs=srgb&dl=pexels-cottonbro-4676419.jpg&fm=jpg",
           "https://images.pexels.com/photos/1128415/pexels-photo-1128415.jpeg?cs=srgb&dl=pexels-niki-nagy-1128415.jpg&fm=jpg",
           "https://images.pexels.com/photos/7103587/pexels-photo-7103587.jpeg?cs=srgb&dl=pexels-niklas-jeromin-7103587.jpg&fm=jpg",
           "https://images.pexels.com/photos/13241310/pexels-photo-13241310.jpeg?cs=srgb&dl=pexels-niklas-jeromin-13241310.jpg&fm=jpg"],
      flagIcon: "https://scdn.italki.com/orion/static/flags/de.svg",
      price: 12.99,
      stock: 22,
      isLive: true,
      description: "This course will allow you, as a student, to get started in the German language and culture from a basic level, studying the grammar, vocabulary and expressions of the language. Through this course, you will also explore key words, sentences and phrases in order to establish a conversation. This will help you handle everyday situations as naturally as possible."
    },
    {
      id: 4,
      name: "Italian",
      level: "A1",
      img:["https://images.pexels.com/photos/2422259/pexels-photo-2422259.jpeg?cs=srgb&dl=pexels-josh-hild-2422259.jpg&fm=jpg",
           "https://images.pexels.com/photos/2225439/pexels-photo-2225439.jpeg?cs=srgb&dl=pexels-mark-neal-2225439.jpg&fm=jpg",
           "https://images.pexels.com/photos/3649184/pexels-photo-3649184.jpeg?cs=srgb&dl=pexels-julia-khalimova-3649184.jpg&fm=jpg",
           "https://images.pexels.com/photos/2233348/pexels-photo-2233348.jpeg?cs=srgb&dl=pexels-vincent-rivaud-2233348.jpg&fm=jpg"],
      flagIcon:"https://scdn.italki.com/orion/static/flags/it.svg",
      price: 9.99,
      stock: 27,
      isLive: true,
      description: "This course will allow you, as a student, to get started in the Italian language and culture from a basic level, studying the grammar, vocabulary and expressions of the language. Through this course, you will also explore key words, sentences and phrases in order to establish a conversation. This will help you handle everyday situations as naturally as possible."
    },
    {
      id: 5,
      name: "Portuguese",
      level: "A1",
      img:["https://images.pexels.com/photos/3568789/pexels-photo-3568789.jpeg?cs=srgb&dl=pexels-kaique-rocha-3568789.jpg&fm=jpg",
           "https://images.pexels.com/photos/1559908/pexels-photo-1559908.jpeg?cs=srgb&dl=pexels-lisa-fotios-1559908.jpg&fm=jpg",
           "https://images.pexels.com/photos/1730403/pexels-photo-1730403.jpeg?cs=srgb&dl=pexels-lisa-fotios-1730403.jpg&fm=jpg",
           "https://images.pexels.com/photos/3571568/pexels-photo-3571568.jpeg?cs=srgb&dl=pexels-frederico-erthal-3571568.jpg&fm=jpg"],
      flagIcon: "https://scdn.italki.com/orion/static/flags/pt.svg",
      price: 8.99,
      stock: 24,
      isLive: true,
      description: "This course will allow you, as a student, to get started in the Portugese language and culture from a basic level, studying the grammar, vocabulary and expressions of the language. Through this course, you will also explore key words, sentences and phrases in order to establish a conversation. This will help you handle everyday situations as naturally as possible."
    },
    {
      id: 6,
      name: "Chinese",
      level: "A1",
      img:["https://images.pexels.com/photos/33162/food-restaurant-menu-asia.jpg?cs=srgb&dl=pexels-pixabay-33162.jpg&fm=jpg",
           "https://images.pexels.com/photos/2412603/pexels-photo-2412603.jpeg?cs=srgb&dl=pexels-paulo-marcelo-martins-2412603.jpg&fm=jpg",
           "https://images.pexels.com/photos/3204950/pexels-photo-3204950.jpeg?cs=srgb&dl=pexels-ruiyang-zhang-3204950.jpg&fm=jpg",
           "https://images.pexels.com/photos/7994514/pexels-photo-7994514.jpeg?cs=srgb&dl=pexels-barry-tan-7994514.jpg&fm=jpg"],
      flagIcon:"https://scdn.italki.com/orion/static/flags/cn.svg",
      price: 12.99,
      stock: 21,
      isLive: false,
      description: "This course will allow you, as a student, to get started in the Chinese language and culture from a basic level, studying the grammar, vocabulary and expressions of the language. Through this course, you will also explore key words, sentences and phrases in order to establish a conversation. This will help you handle everyday situations as naturally as possible."
    }]
    // Store the find operation to match the object element with id in a variable to use it in line 105
    const selectedCourse = products.find((el) => el.id == id)
    setItem(selectedCourse)
    new Promise((resolve) => {
      // This Promise is running with setTimeout() this code will be skipped to the next task to execute 
      setTimeout(() => {
        // eslint-disable-next-line
        resolve(selectedCourse)
      }, 2000)
      
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