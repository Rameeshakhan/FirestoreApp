import React, { useState } from 'react'

const Contact = () => {
    const [name, setName] = useState("")
    const [message, setMessage] = useState("")
    const db = fetch("https://console.firebase.google.com/u/0/project/testing-6a6f8/database/testing-6a6f8-default-rtdb/data/~2F");
    
    return (
        <div className="container my-4">
            <form method="POST">
            <h1 className="my-3">Contact Form</h1>
            <hr></hr>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label"><b>Name</b></label>
                <input type="text" className="form-control" onChange={(e) =>{setName(e.target.value)}} required/>
            </div>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label"><b>Message</b></label>
                <textarea className="form-control"  onChange={(e) =>{setMessage(e.target.value)}} rows="3" required></textarea>
            </div>
            <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Contact
