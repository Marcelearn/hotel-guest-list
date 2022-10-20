import Rooms from '../Data.json';
const SortedRooms = Rooms.sort((a, b)=> a.roomNo - b.roomNo);
export default SortedRooms;