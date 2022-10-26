import './App.css';
import Room from './components/Room'
import Form from './components/Form';
import Rooms from "./Data.json";


function App() {
 
  const roomsComponents = Rooms.map((item, index) => {
    return <Room item={item} key={index} />
  })  
  
  
  return (
    <div className="App">
      <h1 className="mainTitle">Our {Rooms.length} occupied rooms and their guests</h1>
      <Form />
      {/* <Room item={item} key={index} /> */}
      {/* <div onChange={addStorage}> */}

        {roomsComponents}
      {/* </div>  */}
     
     

    </div>
  );
}
export default App;
