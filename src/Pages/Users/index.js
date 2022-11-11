import React from 'react'
import { MetaTags } from 'react-meta-tags'
import { Container } from 'reactstrap'
import BreadcrumbCom from '../../Components/common/Breadcrumb';
import UserTable from '../../Components/Users/userTable';


const Users = (props) => {
  return (
    <React.Fragment>
        <MetaTags>
          <title> Users | BrightSwipe</title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumb */} 
         <BreadcrumbCom
            title="Dashboards"
            breadcrumbItem="Users"
          />
          <UserTable />
        </Container>
        
    </React.Fragment>
  )
}

export default Users