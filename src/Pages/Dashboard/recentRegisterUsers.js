import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody } from 'reactstrap'
import paginationFactory, { PaginationProvider } from 'react-bootstrap-table2-paginator'

const recentRegisterUsers = () => {
  return (
    <React.Fragment>
        <Card>
            <CardBody>
                <div className='mb-4 h4 text-gray card-title d-flex justify-content-between align-items-center'>
                RECENTLY REGISTERED USERS
            <Link 
            // to="/users"
            to="#" 
            className="view-all-link">View all »</Link>
                </div>
                <PaginationProvider
                pagination={""}
                keyFields="id"
                columns={""}
                data={""}
                >

                </PaginationProvider>
            </CardBody>
        </Card>
    </React.Fragment>
  )
}

export default recentRegisterUsers
