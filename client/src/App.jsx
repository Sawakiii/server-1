import React from "react"


const App = () => {
    const [message, setMessage] = React.useState("")


    const handleGet = () => {
        fetch("/api")
        .then(res=>res.json())
        .then(res => {
            setMessage(res.msg)
        })
    }
    const handlePost = () => {
        fetch("/api", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify({
                title: "POSTしたぞ"
            })
        }).then(res=>res.json())
        .then(res=>{
            setMessage(res.msg)
        })
    }
    return (
        <>
            <button onClick={handleGet}>getする</button>
            <button onClick={handlePost}>postする</button>
            <h1>{message}</h1>
        </>
    )

}

export default App