import React, { useRef, useState, useEffect } from 'react';
import { MetaTags } from 'react-meta-tags';
import {
  Card,
  CardBody,
  Col,
  Container,
  Form,
  Input,
  Label,
  Row,
} from 'reactstrap';
import Breadcrumbs from '../../components/Common/Breadcrumb';
import PropTypes from 'prop-types';
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Table,
} from 'reactstrap';
import { uplodeImage, updatePage } from '../../service/pageService';
import { useHistory } from 'react-router-dom';
import { showAlert } from 'components/Common/AlertMessage';

const userDetailsModal = (props) => {
 
  return (
    <Modal
      isOpen={isOpen}
      role="dialog"
      autoFocus={true}
      centered={true}
      className="exampleModal"
      tabIndex="-1"
      toggle={() => toggle(false)}
    >
      <div className="modal-content">
        <ModalHeader toggle={() => toggle(false)}>USER DETAILS</ModalHeader>
        <ModalBody>
          <React.Fragment>
            <div className="page-content">
              <Container fluid>
                <Card>
                  <CardBody>
                    <Form
                      className="form-horizontal"
                      onSubmit={(e) => {
                        e.preventDefault();
                      }}
                    >
                      <Row>
                        <Col sm="4" className="mb-3">
                          <Label className="form-label">Headline</Label>
                          <Input
                            value={title}
                            name="title"
                            className="form-control"
                            placeholder="Enter title"
                            type="text"
                            onChange={HandleInputField}
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col sm="8" className="mb-3">
                          <div className="textarea-content border-bottom-gray2 pb-4">
                            <Label className="form-label">Content</Label>
                            <Input
                              value={content}
                              name="content"
                              className="form-control text-area-custom"
                              placeholder="Enter content"
                              type="textarea"
                              onChange={HandleInputField}
                            />
                          </div>
                          <div className="form-action pt-3"></div>
                        </Col>
                        <Col sm="4" className="mb-3">
                          <div className="profile-picture24 ">
                            <img
                              src={image == '' ? pic : image}
                              alt="picture new"
                              crossorigin="anonymous"
                              className="img-fluid w-100"
                            />
                          </div>
                          <div className="field-group mt-4">
                            <Label className="form-label">About us image</Label>
                            <Input
                              value={slug}
                              name="slug"
                              className="form-control"
                              placeholder="uploaded image name"
                              type="text"
                              onChange={HandleInputField}
                            />
                          </div>
                          <div className="upload-profile d-flex align-items-start mt-3">
                            <input
                              style={{ display: 'none' }}
                              ref={inputRef}
                              type="file"
                              accept="image/png, image/gif, image/jpeg"
                              onChange={handleFileChange}
                            />
                            <button
                              type="button"
                              className="btn btn-sm btn-secondary me-3"
                              onClick={handleClick}
                            >
                              Upload
                            </button>
                            <p className="text-gray">
                              Accepted formats: JPG, PNG Your image must be up
                              to 512x512px and cannot be over 2MB.{' '}
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </Container>
            </div>
          </React.Fragment>
        </ModalBody>
        <ModalFooter>
          <Button
            type="button"
            className="btn btn-primary me-3"
            onClick={handleSubmitChange}
          >
            Save Changes
          </Button>
          <Button type="button" color="secondary" onClick={() => toggle(false)}>
            Close
          </Button>
        </ModalFooter>
      </div>
    </Modal>
  );
};

userDetailsModal.propTypes = {
  toggle: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default userDetailsModal;
