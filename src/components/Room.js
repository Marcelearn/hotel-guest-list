import Reverse from "./Reverse";
import './Room.scss'

function Room({item, updateData}){ 
    console.log(item)
   
    return (

        <div className="room">
            <h2 className="room__Nummer" value="roomNo">Room {item.roomNo}</h2>
            <h3>Guest</h3>
            <p className="room__guest" >Name: {item.guest.firstName}</p>
            <p className="room__guest" >Lastname: {item.guest.lastName}</p>
            <p className="room__guest__checkin" >checkIn: {Reverse(item.checkIn)}</p>
            <p className="room__guest__checkout">checkOut: {Reverse(item.checkOut)}</p>
            <br/>
            <button className={item.checkedIn?"red":"green"} onClick={()=>updateData(item)}>{item.checkedIn? "occupied": "vacant"}</button>{/* Ruft die Funktion updateData aus App.js auf und übergibt aktuelles item  */}
            
        </div>

    );
}
export default Room;