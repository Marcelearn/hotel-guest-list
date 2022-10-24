import './App.css';
import Rooms from './Data.json'
import Room from './components/Room'
import SortedRooms from './components/Sort';


function App() {
  const roomsComponents = SortedRooms.map((item, index) => {
    return <Room item={item} key={index} />
  })
  return (
    <div className="App">
      <h1 className="mainTitle">Our {Rooms.length} occupied rooms and their guests</h1>
      {roomsComponents};

    </div>
  );
}
export default App;
