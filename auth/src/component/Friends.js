import React from "react";
import axios from "axios";
import Friend from "./Friend";
import AddFriend from "./AddFriend";

const axiosWithAuth = ()=>{
   return axios.create({
        headers:{
            authorization: sessionStorage.getItem("token")
        }
    });
}



class Friends extends React.Component{

    state = {
        friends: []
    }

     returnData = () =>{
        const Auth = axiosWithAuth();
    
        Auth.get("http://localhost:5000/api/friends")
            .then((res)=>{
                console.log(res.data)
                this.setState({
                    friends:res.data
                })
            })
            .catch((err)=>console.log(err))
    }

    componentDidMount(){
        this.returnData();

    }


    deleteFriend=(id)=>{
        console.log("before", this.state.friends)
        this.setState({
            friends:this.state.friends.filter((f)=>{
                return f.id !==id;
            })
        })
        console.log(id)
        console.log("after", this.state.friends)
    }

    addFriend=(friend)=>{

        const Auth = axiosWithAuth();

        Auth.post("http://localhost:5000/api/friends", friend)
        .then((res)=>{
            console.log(res)
        })

        this.returnData();
    }

 

    render(){
        return(
            <div>
                <h1>Friends</h1>
                <AddFriend post = {this.addFriend}/>
                {this.state.friends.map((f)=>(
                    <>
                        <Friend name = {f.name} id={f.id} age = {f.age} del = {this.deleteFriend}/>
                    </>
                ))}
            </div>
        );
    }
}

export default Friends;