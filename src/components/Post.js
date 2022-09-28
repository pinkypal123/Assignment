import { isValidDateValue } from "@testing-library/user-event/dist/utils"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function Post(){
    const param=useParams()
    // console.log(param)//id
    const[post,setPost]=useState([])
    useEffect(()=>{
        fetch(`https://reqres.in/api/users/${param.userId}`)
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log(data)
            setPost(data)
        })
    },[])
    return(
        <>
        <div>{post.data.id}</div>
     <div className="postContainer">
                
                <section key={post.data.id}>
                    <img src={post.data.avatar}/>
                    <div>Name:{post.data['first_name']+" "+post.data['last_name']}</div>
                    <div>Email:{post.data.email}</div>
                    <div>Description:{post.support.text}</div>
                   </section>
    
                </div> 
        </>
    )
}