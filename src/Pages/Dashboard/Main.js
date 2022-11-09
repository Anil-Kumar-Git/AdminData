import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { MetaTags } from "react-meta-tags";

const Dashboard = () => {
 const state=useSelector((state)=>state)
 console.log("state",state)
  return (
    <div className="background-dark">
      <main id="main" className="main">
        <MetaTags>
         <title>Dashboard | AdminDemo</title>
        </MetaTags>
        <Container fluid>
        <div className="pagetitle">
          <h1>Dashboard</h1>
        </div>
        <Row>
            <Col lg="12" className="mb-4">
              {/* <RecentRegisteredUser /> */}
            </Col>
            <Col lg="12">
              {/* <RecentOrder /> */}
            </Col>
          </Row>
        </Container>
       
      </main>
    </div>
  );
};

export default Dashboard;
