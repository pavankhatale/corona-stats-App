import React, {  useState } from "react";
export default function Main() {
  const [date, setdate] = useState("22-04-2019");
  const [data, setdata] = useState([]);



  const validation = (e) => {
    setdate(e.target.value.split("-").reverse().join("-"));
  };

  const getdata = async () => {
    const res = await fetch(
      `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=363&date=${date}`
    );
    const actdata = await res.json();
    setdata(actdata.centers);
    alert("welcome......")
  };

  return (
    <div className="main">
      <div className="date">
      <h2>Select date to get data</h2>
      <input type="date" onChange={validation}
      
      ></input>
      <button onClick={getdata}>click</button>
      </div>
      <div>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="thead-dark">
              <tr>
                <th>No </th>
                <th>Name </th>
                <th>Vaccine </th>
                <th>Available-Capicty </th>
                <th>Slots </th>
              </tr>
            </thead>
            <tbody>
              {data.map((cur, ind) => {
                return (
                  <tr key={ind}>
                    <td>{ind} </td>
                    <td>{cur.name} </td>

                    <td>{cur.sessions[0].vaccine} </td>
                    <td>{cur.sessions[0].available_capacity} </td>
                    <td>{cur.sessions[0].slots.map((nested,i)=>
                    <tr key={i}>
                      <td>{nested.time}</td>
                    </tr>
                    )
                    } </td>



                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
