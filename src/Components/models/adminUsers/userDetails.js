import React, { useState } from 'react';
import { useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Container, Col, Row } from 'reactstrap';
import { getUserById } from '../../../Middleware/AxiosApis/users/userApiResponse';

function UserDetailsModal(args) {
  const [userDetails,setUserDetails]=useState([]);

  const toggle = () =>{
    args?.setModal({detail:false})
  }
  useEffect(()=>{
    getAllUserDetails()
  },[args])

  const getAllUserDetails=async()=>{
    const res=await getUserById(args?.detailID);
    console.log(res,"resuserDetail")
    if(res){
      setUserDetails()
    }
  }

  return (
    <div >
      <Modal centered isOpen={args?.isOpen} >
        <ModalHeader toggle={toggle}>User Details</ModalHeader>
        <ModalBody>
          <Container>
            <Row>
              <Col>kdjhwuhei</Col>
              <Col>kdfjeoifuroe</Col>
            </Row>
          </Container>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default UserDetailsModal;