import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import { workshop } from "./work";
const WorkShop = () => {
  const [recodes, setRecords] = useState(workshop);
  const [filter1, setFilter] = useState(recodes);
  console.log("recodes", filter1);
  const Filter = (e) => {
    setFilter(
      recodes.filter((f) => f.city.toLowerCase().includes(e.target.value))
    );
  };
  console.log("Filter", recodes);
  return (
    <div style={{backgroundColor:"aqua"}}>
      <Container >
        <h1>Warehouses List</h1>
        <input
          type="text"
          className="form-control"
          onChange={Filter}
          placeholder="Enter by City "
        />

        <table style={{marginTop:"20px"}}>
          <thead>
            <tr>
              <th style={{color:"#333"}}>Id</th>
              <th style={{color:"#333"}}>Name</th>
              <th style={{color:"#333"}}>Code</th>
              <th style={{color:"#333"}}>City</th>
              <th style={{color:"#333"}}>Space_available</th>
              <th style={{color:"#333"}}>Cluster</th>
              <th style={{color:"#333"}}>Is_registered</th>
              <th style={{color:"#333"}}>Is_live</th>
            </tr>
          </thead>
          <tbody>
          {filter1.map((d, i) => (
              <tr key={i} style={{border:"2px solid black", boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)', }}>
                <td style={{padding:"10px", textAlign:"left", borderBottom:"1px solid #ccc"}}>{d.id}</td>
                <td style={{padding:"10px", textAlign:"left", borderBottom:"1px solid #ccc"}}>{d.name}</td>
                <td style={{padding:"10px", textAlign:"left", borderBottom:"1px solid #ccc"}}>{d.code}</td>
                <td style={{padding:"10px", textAlign:"left", borderBottom:"1px solid #ccc"}}>{d.city}</td>
                <td style={{padding:"10px", textAlign:"left", borderBottom:"1px solid #ccc"}}>{d.space_available}</td>
                <td style={{padding:"10px", textAlign:"left", borderBottom:"1px solid #ccc"}}>{d.cluster}</td>
                <td style={{padding:"10px", textAlign:"left", borderBottom:"1px solid #ccc"}}>{d.is_registered ? "Yes" : "No"}</td>
                <td style={{padding:"10px", textAlign:"left", borderBottom:"1px solid #ccc"}}>{d.is_live ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </div>
  );
};

export default WorkShop;