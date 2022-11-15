import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import paginationFactory, {
  PaginationListStandalone,
  PaginationProvider,
} from "react-bootstrap-table2-paginator";
import Select from "react-select";
import {
  Card,
  CardBody,
  Col,
  Row,
  Form,
  Label,
  Spinner,
  Button,
} from "reactstrap";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";

// import EditIcon from "./../../assets/icons/edit-icon.svg";
// import RemoveICon from "./../../assets/icons/remove-icon.svg";
// import { getUserAllData, deleteUser } from "../../service/userService";
// import { Spinner } from "reactstrap";
// //redux
// import { useSelector, useDispatch } from "react-redux";
// import UserModal from "pages/Users/userModal";
// import DeleteModal from "components/Common/UserSuspendModal";
// import { typeGroup, statusGroup } from "../Common/DropdownGroup";
// import EcommerceOrdersModal from "pages/Ecommerce/EcommerceOrders/EcommerceOrdersModal";
// import Swal from "sweetalert2";
// import moment from "moment";
// import { showAlert } from "components/Common/AlertMessage";
import { DebounceInput } from "react-debounce-input";
import { EcommerceOrderColumns } from "./userConfig";
import { defaultSorted } from "./userConfig";
import { getUserAllData } from "../../Middleware/AxiosApis/users/userApiResponse";
import { statusGroup, typeGroup } from "../common/dropDownGroups";
import UserDetailsModal from "../models/adminUsers/userDetails"

const UserTable = (props) => {
  const [backupData, setBackupData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [userfilter, setUserfilter] = useState({
    type: "",
    status: "",
    search: "",
  });
  const [loading, setLoading] = useState(false);
  const [modal,setModal]= useState({detail:false,delete:false,edit:false})
  const [detailsId, stDetailId] = useState("");
  

  const { SearchBar } = Search;

  const getAllUser = async () => {
    setLoading(true);
    if (userfilter.status || userfilter.type || userfilter.search) {
      let filterdata = {
        search: userfilter?.search,
        status: userfilter?.status?.value,
        type: userfilter?.type?.value,
      };
      console.log(filterdata, "filterdata");
      const res = await getUserAllData(filterdata);

      console.log(res, "filterdata");
      if (res) {
        setLoading(false);
        dataFilter(res?.data);
      }
    } else {
      const res = await getUserAllData();
      if (res) {
        setLoading(false);
        setUserData(res?.data);
        setBackupData(res?.data);
      }
    }
  };

  useEffect(() => {
    getAllUser();
  }, [userfilter]);

  const dataFilter = (alldata) => {
    let data = alldata;
    const searched = userfilter?.search;
    if (searched) {
      let searchData = data.filter((val) => {
        return (
          val?.email?.toLowerCase()?.includes(searched?.toLowerCase()) ||
          val?.mobile_phone?.toLowerCase()?.includes(searched?.toLowerCase()) ||
          val?.first_name?.toLowerCase()?.includes(searched?.toLowerCase()) ||
          val?._id?.toLowerCase()?.includes(searched?.toLowerCase())
        );
      });
      data = searchData;
    }
    setUserData(data);
  };

  const resetAllInput = () => {
    setUserfilter({ type: "", status: "", search: "" });
  };

  //pagination customization
  const pageOptions = {
    sizePerPage: 6,
    totalSize: userData?.length || 0, // userData?.length ||
    custom: true,
  };

  const toggle=(val,id)=>{
    setModal({detail:val})
    stDetailId(id)
  }

  return (
    <React.Fragment>
      <UserDetailsModal 
      isOpen={modal?.detail}
      detailID={detailsId || " "}
      setModal={setModal}
      />
      {/* <UserModal
        isOpen={modal1}
        toggle={toggleViewModal}
        editValue={isEdit}
        userfilter={userfilter}
        HandleSetUserData={HandleSetUserData}
        setLoading={setLoading}
      />
      <DeleteModal
        show={delmodal}
        onDeleteClick={onDelete}
        onCloseClick={onClose}
      /> */}
      <div className="p-2">
        <Form
          className="form-horizontal"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="row">
            <div className="col-3 mb-3">
              <Label className="form-label">Search Users</Label>
              <DebounceInput
                minLength={2}
                name="userEmail"
                className="form-control field-search"
                placeholder="By email address or phone"
                debounceTimeout={300}
                value={userfilter?.search}
                onChange={(e) =>
                  setUserfilter({ ...userfilter, search: e.target.value })
                }
              />
            </div>
            <div className="col-3 mb-3">
              <Label className="form-label">Filter by Type</Label>
              <Select
                placeholder={
                  <span
                    style={{
                      fontSize: "14px",
                    }}
                  >
                    All Roles
                  </span>
                }
                value={userfilter?.type}
                onChange={(e) => {
                  setUserfilter({
                    ...userfilter,
                    type: e,
                  });
                }}
                options={typeGroup}
                classNamePrefix="select2-selection"
              />
            </div>
            <div className="col-3 mb-3">
              <Label className="form-label">Filter by Status</Label>
              <Select
                placeholder={
                  <span
                    style={{
                      fontSize: "14px",
                    }}
                  >
                    All Statuses
                  </span>
                }
                value={userfilter.status}
                onChange={(e) => {
                  setUserfilter({
                    ...userfilter,
                    status: e,
                  });
                }}
                options={statusGroup}
                classNamePrefix="select2-selection"
              />
            </div>
            <div className="col-3 mb-3">
              <Button
                style={{ direction: "rtl", marginTop: 32 }}
                onClick={resetAllInput}
              >
                Reset All
              </Button>
            </div>
          </div>
        </Form>
      </div>
      <Card>
        <CardBody>
          {userData?.length == 0 && !loading ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                flexDirection: "row",
              }}
            >
              <h2>No Data Found</h2>
            </div>
          ) : (
            <>
              {" "}
              {!loading ? (
                <PaginationProvider
                  pagination={paginationFactory(pageOptions)}
                  keyField="_id"
                  columns={EcommerceOrderColumns(toggle)}
                  data={userData || []}
                >
                  {({ paginationProps, paginationTableProps }) => (
                    <ToolkitProvider
                      keyField="_id"
                      data={userData || []}
                      columns={EcommerceOrderColumns(toggle)}
                      bootstrap4
                      search
                    >
                      {(toolkitProps) => (
                        <React.Fragment>
                           <SearchBar {...toolkitProps.searchProps} />
                          <Row>
                            <Col xl="12">
                              <div className="table-responsive">
                               
                                <hr />

                                <BootstrapTable
                                  keyField="_id"
                                  responsive
                                  bordered={false}
                                  striped={false}
                                  defaultSorted={defaultSorted}
                                  classes={
                                    "table align-middle table-nowrap table-no-check table-check"
                                  }
                                  headerWrapperClasses={"table-light"}
                                  {...toolkitProps.baseProps}
                                  {...paginationTableProps}
                                />
                              </div>
                            </Col>
                          </Row>
                          <div className="pagination pagination-rounded justify-content-center">
                            <PaginationListStandalone {...paginationProps} />
                          </div>
                        </React.Fragment>
                      )}
                    </ToolkitProvider>
                  )}
                </PaginationProvider>
              ) : (
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <Spinner
                    style={{ width: "2rem", height: "2rem" }}
                    children={false}
                  />
                </div>
              )}
            </>
          )}
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

UserTable.propTypes = {
  orders: PropTypes.array,
  onGetOrders: PropTypes.func,
};

export default UserTable;
