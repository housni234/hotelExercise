import React from "react";
import moment from "moment";

const Table = props => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">title</th>
          <th scope="col">first name</th>
          <th scope="col">last name</th>
          <th scope="col">email</th>
          <th scope="col">room id</th>
          <th scope="col">check in</th>
          <th scope="col">check out</th>
          <th scope="col">stayDays</th>
        </tr>
      </thead>
      <tbody>
        {props.bookings.map(booking => {
          const checkInMomemt = moment(booking.checkInDate);
          const checkOutMomemt = moment(booking.checkOutDate);
          const stayDays = checkOutMomemt.diff(checkInMomemt, "days");
          return (
            <tr key={booking.id}>
              <th scope="row">{booking.id}</th>
              <td>{booking.title}</td>
              <td>{booking.firstName}</td>
              <td>{booking.surName}</td>
              <td>{booking.email}</td>
              <td>{booking.roomId}</td>
              <td>{booking.checkInDate}</td>
              <td>{booking.checkOutDate}</td>
              <td>{stayDays}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default Table;
