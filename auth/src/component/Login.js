import React from 'react';
import axios from "axios";

const Login = ()=>{

    const [input, setInput] = React.useState({
        username:"",
        password:""
    })
    const [isLoading, setLoading] = React.useState(false);

    const handleInput = (e)=>{
        setInput({...input, [e.target.name]:e.target.value})
    }

    const handleClick = (e)=>{
        e.preventDefault();
        console.log(input);

        setLoading(true);
        axios.post("http://localhost:5000/api/login", input)
            .then((res)=>{
                console.log(res)
                
            })
            .catch((err)=>console.log(err))
            .finally(()=>setLoading(false))
    }

    return(
        <>
            <form>
                <div>
                    <h1>{isLoading ? "Loadin scrub lol": "I'm a bot lol"}</h1>
                    <label>UserName:</label>
                    <input value = {input.username} onChange={handleInput} name="username" required></input>
                </div>
                <div>
                    <label>Password:</label>
                    <input value = {input.password} onChange={handleInput} name="password" required></input>
                </div>
                <button onClick={handleClick}>Bot</button>
            </form>
        </>
    );

}

export default Login;