import { useState, useEffect } from "react";
import Reverse from "./Reverse";
function Room({item}){ 
    const [checkedIn, setcheckIn] = useState(false)
    
    const handlerOnclick = () =>{
        setcheckIn(!checkedIn)
        console.log("handlerOnclick")
    }
    useEffect (() =>{
        console.log("useEffect")
        
        if(checkedIn){
            alert(`Zimmer Nr. ${item.roomNo} ist nun belegt.`)
        }

    },[checkedIn])
    return (
        <div className="room">
            <button onClick={handlerOnclick}>{checkedIn? "Check In": "Check Out"}</button>
            <h2 className="room__Nummer" value="roomNo">Room number: {item.roomNo}</h2>
            <h3>Guest</h3>
            <p className="room__guest" value="guestFirstname">Name: {item.guest.firstName}</p>
            <p className="room__guest" value="guestLastname">Lastname: {item.guest.lastName}</p>
            <p className="room__guest__checkin" value="checkIn">checkIn: {Reverse(item.checkIn)}</p>
            <p className="room__guest__checkout" value="checkOut">checkOut: {Reverse(item.checkOut)}</p>
        </div>

    );
}
export default Room;