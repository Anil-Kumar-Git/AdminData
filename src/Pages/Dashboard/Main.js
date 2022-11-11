import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { MetaTags } from "react-meta-tags";
import BreadcrumbCom from "../../Components/common/Breadcrumb";

const Dashboard = () => {
 const state=useSelector((state)=>state)
 console.log("state",state)
  return (
    <React.Fragment>
        <MetaTags>
         <title>Dashboard | AdminDemo</title>
        </MetaTags>
        <Container fluid>
        <BreadcrumbCom
            title="Dashboards"
          />
        <Row>
            <Col lg="12" className="mb-4">
              {/* <RecentRegisteredUser /> */}
            </Col>
            <Col lg="12">
              {/* <RecentOrder /> */}
            </Col>
          </Row>
        </Container>
    </React.Fragment>
  );
};

export default Dashboard;
