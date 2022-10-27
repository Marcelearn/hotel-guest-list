import { useState, useEffect } from "react";
import './App.css';
import Room from './components/Room'
import Form from './components/Form';
import Rooms from "./Data.json";
import SortedRooms from './components/Sort';

function App() {
  const [data, setData] = useState(JSON.parse(localStorage.getItem("rooms")) || SortedRooms(Rooms))
  const handleUpdateData = (room) => { {/* Wenn der Button geklickt wurde checkedIn ändern und localStorage updaten sowie mit useState neu rendern */}
    let dataCopy = [...data]; // Neue Instanz von data erstellen (data kann nicht direkt verändert werden, nur über setData)
    const clickedRoomIndex = dataCopy.findIndex((el) => {// Anhand der Raumnummer den Index des angeklickten Raums finden
      return el.roomNo === room.roomNo
    })
    const checkedIn = dataCopy[clickedRoomIndex].checkedIn;// checkedIn Wert des angeklickten Raums (boolean) in einer Variable speichern <<< true oder false
    dataCopy[clickedRoomIndex].checkedIn = !checkedIn; // checkedIn Wert "toggeln" < true wird false, false wird true
    localStorage.setItem("rooms", JSON.stringify(dataCopy)); // localStorage setzen mit dem neuen Wert für checkedIn
    setData(dataCopy) // useState mit dem neuen Datenobjekt aufrufen um die Seite neu zu rendern < die Änderungen im html sichtbar zu machen
  }

  const roomsComponents = data.map((item, index) => {
    return <Room item={item} key={index} updateData={handleUpdateData} />// handleUpdateData als props übergeben um bei Buttonclick in Room.js ausgeführt zu werden
  })  
  
  
  return (
    <div className="App">
      <h1 className="mainTitle">Our {data.length} occupied rooms and their guests</h1>
      <Form />
      {roomsComponents}
    </div>
  );
}
export default App;
