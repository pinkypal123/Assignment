import { isValidDateValue } from "@testing-library/user-event/dist/utils"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function Post(){
    const param=useParams()
    // console.log(param)//id
    const[post,setPost]=useState({})
    useEffect(()=>{
        fetch(`https://reqres.in/api/users/${param.userId}`)
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            // console.log(data)
            setPost(data)
        })
    },[])
    const objectEntry=Object.entries(post)
    console.log(...objectEntry)
    return(
        <>
        <div>
            {/* <ul> */}
                {
                    objectEntry.map((el)=>{
                        let data=Object.entries(el)

                        // console.log(...el)
                        // return (<section key={el[1].id}>
                        //     <div>Name:{el[1].first_name+" "+el[1].last_name}</div>
                        //     <div>Email:{el[1].email}</div>
                        //     <div>Description:{el[1].text}</div>
                        //     <div>Image:{el[1].avatar}</div>
                        // </section>)
                        el.map((data)=>{
                            return (
                                <>
                                <section>{data.email}</section>
                                <section>{data.text}</section>
                                </>
                            )
                        })
                        return el
                    })
                }
        </div>
        </>
    )
}