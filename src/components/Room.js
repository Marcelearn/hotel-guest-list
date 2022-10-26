import { useState, useEffect } from "react";
import Reverse from "./Reverse";
import Rooms from "../Data.json";
import SortedRooms from '../components/Sort';


function Room({item}){ 
    console.log(item)
    const [arr, setArr ] = useState([])
    const [checkedIn, setcheckIn] = useState(false)
    useEffect(()=> {
      console.log("aus Ls laden")
     setArr(JSON.parse(localStorage.getItem("rooms")) || SortedRooms(Rooms));
     // addStorage(roomsComponents)
    },[])
    useEffect(()=>{
      localStorage.setItem("rooms", JSON.stringify(arr))
  
    },[arr])
    
   
  
    const handlerOnclick = () =>{
        
        setcheckIn(!checkedIn)
        // setArr((current)=>[...current , item.checkedIn= checkedIn])
    
        console.log("handlerOnclick")
    }
    useEffect (() =>{
        if(checkedIn){
            return alert(`Zimmer Nr. ${item.roomNo} ist nun belegt.`)
        }
    },[checkedIn])
    return (

        <div className="room">
            <h2 className="room__Nummer" value="roomNo">Room {item.roomNo}</h2>
            <h3>Guest</h3>
            <p className="room__guest" >Name: {item.guest.firstName}</p>
            <p className="room__guest" >Lastname: {item.guest.lastName}</p>
            <p className="room__guest__checkin" >checkIn: {Reverse(item.checkIn)}</p>
            <p className="room__guest__checkout">checkOut: {Reverse(item.checkOut)}</p>
            <br/>
            <button onClick={handlerOnclick}>{checkedIn? "Check In": "Check Out"}</button>
            
        </div>

    );
}
export default Room;