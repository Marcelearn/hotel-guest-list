import './App.css';
import Rooms from './Data.json'
import Room from './components/Room'

function App() {
  const sortedRooms = Rooms.sort((a, b)=> a.roomNo - b.roomNo);
  const roomsComponents = sortedRooms.map((item, index) => {
    return <Room item={item} index={index} />
  })
  return (
    <div className="App">
      <h1 className="mainTitle">Our {Rooms.length} occupied rooms and their guests</h1>
      {roomsComponents};

    </div>
  );
}
export default App;
