import { Link } from "react-router-dom";
import { Badge, Button } from "reactstrap";
import { capitalizeFirstLetter } from "../common/letterCappital";
import moment from "moment";
import { RiDeleteBinFill, RiEdit2Line } from "react-icons/ri"

export const EcommerceOrderColumns = (toggle) => [
  {
    dataField: "_id",
    text: "USER ID",
    sort: true,
    formatter: (cellContent, row) => (
      <Badge
        className="text-dark"
        color="light"
        onClick={()=>toggle(true,row._id)}
      >
        {row?._id}
      </Badge>

    ),
  },
  {
    dataField: "email",
    text: "PHONE/EMAIL",
    formatter: (cellContent, row) => (
      <>
        <p style={{ fontSize: 12 }}>{row?.mobile_phone || ""}</p>
        <p>{row?.email || ""}</p>
      </>
    ),
  },
  {
    dataField: "customerType",
    text: "TYPE",
    sort: true,
    formatter: (cellContent, row) => (
      <>
        <p>
          {row.role == "admin" ? (
            "Administrator"
          ) : (
            <>
              {row?.customerType == "pre" ? "Pre-customer" : "Post-customer"}
            </>
          )}
        </p>
      </>
    ),
  },
  {
    dataField: "status",
    text: "STATUS",
    sort: true,
    formatter: (cellContent, row) => (
      <Badge
        className={"font-size-12 badge-soft-" + row?.status}
        color={row.status == "active" ? "success" : row.status == "suspended" ? "secondary" : "info"}
        pill
      >
        {capitalizeFirstLetter(row?.status || "")}
      </Badge>
    ),
  },
  {
    dataField: "createdAt",
    text: "CREATED",
    formatter: (cellContent, row) => (
      <p>{moment(new Date(row?.createdAt)).format("DD/MM/YYYY")}</p>
    ),
  },
  {
    dataField: "action",
    text: "ACTION",
    formatter: (cellContent, row) => (
      <div>
        <Link
          style={{ fontSize: 40 }}
          to={`/users/user-detail/${row?._id}`}
          //  to='#'
          className="text-body fw-bold"
        >
          <RiEdit2Line />
          {/* <img src={EditIcon} alt="edit icon" /> */}
        </Link>

        <Link
          style={{ fontSize: 40 }}
          to={""}
          className="btn-sm btn-icon btn-rounded"
        // onClick={() => {
        //   onModalOpen(row?.first_name);
        //   setSaveDelUId(row?._id);
        // }}
        // onClick={toggleViewModalold}
        >
          <RiDeleteBinFill />
          {/* <img src={RemoveICon} alt="remove icon" /> */}
        </Link>
      </div>
    ),
  },
];

export const defaultSorted = [
  {
    dataField: "id",
    order: "desc",
  },
];