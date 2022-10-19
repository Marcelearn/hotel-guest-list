function Room({item}){
    const reverse = (str) => {
        return str.split("-").reverse().join(".");
    };
 
    return (
        <div className="room">
            <h2 className="room__Nummer" value="roomNo" key={item.index}>Room number: {item.roomNo}</h2>
            <h3>Guest</h3>
            <p className="room__guest" value="guestFirstname" key={item.index}>Name: {item.guest.firstName}</p>
            <p className="room__guest" value="guestLastname" key={item.index}>Lastname: {item.guest.lastName}</p>
            <p className="room__guest__checkin" value="checkIn" key={item.index}>checkIn: {reverse(item.checkIn)}</p>
            <p className="room__guest__checkout" value="checkOut" key={item.index}>checkOut: {reverse(item.checkOut)}</p>
        </div>

    );
}
export default Room;