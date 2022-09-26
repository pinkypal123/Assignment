import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import './Home.css'
export default function Home(){
    const[post,setPost]=useState([])
    const[userInput,setUserInput]=useState(0)
    console.log(userInput)
    const navigate=useNavigate()
    useEffect(()=>{
        fetch('https://reqres.in/api/users').then((res)=>{
            return res.json()
            
        })
        .then((data)=>{
          console.log(data)
            setPost(data)
        })
    },[])
   
    
    return(
        <>
        <div className="container">
           <div className="box">
        <input type="number" onChange={(e)=>setUserInput(e.target.value)}/>
            <button onClick={()=>navigate(`${userInput}`)}>Submit</button>
           </div>
        {/* {
            post.map((el)=>{
            return <section className="listData" key={el.id}>{el.data.Name}</section>
            })
        } */}
        </div>
        </>
    )
}