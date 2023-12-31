import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import SCHEDULES from './schedule';

const Home = () => {
  const[items,setItems]=useState(SCHEDULES);
  const filterItem=(categItem)=>{
    const updatedItems = SCHEDULES.filter((curElem)=>{
      return curElem.category==categItem;
    });
    setItems(updatedItems);
  }
    return (
<>
<h2>Select your favourite sport</h2>
<div className="schedule-tab container">
  <div className="schedule-tab justify-content-around">
  <button className="btn btn-primary" onClick={()=>filterItem('Cricket')}>CRICKET</button>
  <button className="btn btn-success" onClick={()=>filterItem('Football')}>FOOTBALL</button>
  <button className="btn btn-dark" onClick={()=>filterItem('Hockey')}>HOCKEY</button>
  <button className="btn btn-warning" onClick={()=>filterItem('Basketball')}>BASKETBALL</button>
  </div>
</div>
<div className="row my-5">
  {
    items.map((elem)=>{
      const {id,image,teamA,teamB,venue,time}=elem;
      return(
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="{image}" />
      <Card.Body>
        <Card.Title>CRICKET</Card.Title>
        <Card.Text>
          Wonderful match to be played under some wonderful atmosphere
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{teamA} (V/S) {teamB}</ListGroup.Item>
        <ListGroup.Item>{venue}</ListGroup.Item>
        <ListGroup.Item>{time}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">TICKETS</Card.Link>
        <Card.Link href="#">ORDER FOOD</Card.Link>
      </Card.Body>
    </Card>
      )
})
  }
</div>

    
</>
  )
}
 export default Home
