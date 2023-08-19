import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink } from "react-router-dom";

const Home = () => {
    return (
<>
{/* <div className="d-flex justify-content-around"> */}
<h1>SPORTS SCHEDULES</h1>
    <hr/>
{/* </div> */}
<Button variant="primary">CRICKET</Button>
<Button variant="success">FOOTBALL</Button>
<Button variant="warning">HOCKEY</Button>
<Button variant="dark">BASKETBALL</Button>
</>
  )
}

export default Home