import React from "react"
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"
import { Breadcrumb ,BreadcrumbItem} from "reactstrap"

const BreadcrumbCom = props => {
  return (
    <Breadcrumb listTag="div">
    <BreadcrumbItem
      href="/"
      tag="a"
    >
      {props.title || ""}
    </BreadcrumbItem>
    <BreadcrumbItem
      href="#"
      tag="a"
    >
      {props?.breadcrumbItem || ""}
    </BreadcrumbItem>
    {/* <BreadcrumbItem
      href="#"
      tag="a"
    >
      Data
    </BreadcrumbItem>
    <BreadcrumbItem
      active
      tag="span"
    >
      Bootstrap
    </BreadcrumbItem> */}
  </Breadcrumb>  
  )
}

BreadcrumbCom.propTypes = {
  breadcrumbItem: PropTypes.string,
  title: PropTypes.string
}

export default BreadcrumbCom
