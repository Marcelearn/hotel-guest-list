import { useState, useEffect } from "react";
import Reverse from "./Reverse";




function Room({item, updateData}){ 
    console.log(item)
    const [checkedIn, setcheckIn] = useState(false)
    // useEffect(()=> {
    //   console.log("aus Ls laden")
    //  setArr(JSON.parse(localStorage.getItem("rooms")) || SortedRooms(Rooms));
    //  // addStorage(roomsComponents)
    // },[])
    // useEffect(()=>{
    //   localStorage.setItem("rooms", JSON.stringify(arr))
  
    // },[arr])
    

    const handlerOnclick = () =>{
        setcheckIn(!checkedIn)
        console.log("handlerOnclick")
    }
    // useEffect (() =>{
    //     if(checkedIn){
    //         return alert(`Zimmer Nr. ${item.roomNo} ist nun belegt.`)
    //     }
    // },[checkedIn])
    return (

        <div className="room">
            <h2 className="room__Nummer" value="roomNo">Room {item.roomNo}</h2>
            <h3>Guest</h3>
            <p className="room__guest" >Name: {item.guest.firstName}</p>
            <p className="room__guest" >Lastname: {item.guest.lastName}</p>
            <p className="room__guest__checkin" >checkIn: {Reverse(item.checkIn)}</p>
            <p className="room__guest__checkout">checkOut: {Reverse(item.checkOut)}</p>
            <br/>
            <button onClick={()=>updateData(item)}>{item.checkedIn? "Check In": "Check Out"}</button>{/* Ruft die Funktion updateData aus App.js auf und übergibt aktuelles item  */}
            
        </div>

    );
}
export default Room;