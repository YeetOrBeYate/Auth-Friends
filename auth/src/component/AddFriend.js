import React from 'react';

const AddFriend = (props)=>{

   const makeFriend = props.post;

    const [friend, setFriend] = React.useState({
        name:"",
        age: "",
        email: ""
    })
    
    const handleChange = (e)=>{

        setFriend({...friend, [e.target.name]: e.target.value})

    }

    const handleSub = (e)=>{
        e.preventDefault();
        makeFriend(friend);
        
    }

    return(
        <form>
            <div>
                <label>Name</label>
                <input name="name" value = {friend.name} onChange={handleChange}/>
            </div>
            <div>
                <label>Age</label>
                <input name="age" value = {friend.age} onChange={handleChange}/>
            </div>
            <div>
                <label>Email</label>
                <input name="email" value = {friend.email} onChange={handleChange}/>
            </div>
            <button onClick={handleSub}>Add Friend</button>
        </form>
    );
}

export default AddFriend;