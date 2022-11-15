const typeGroup = [
    { label: "Pre-customer", value: "pre" },
    { label: "Post-customer", value: "post" },
    { label: "Administrator", value: "admin" },
    { label: "All", value: "" },
  ];
const statusGroup = [
    { label: "Active", value: "active" },
    { label: "Suspended", value: "suspended" },
    { label: "Archived", value: "archived" },
    { label: "Marked for deletion", value: "mark_for_deletion" },
    { label: "All", value: "" },
  ];
const roleGroup = [
  { label: "User", value: "user" },
  { label: "Admin", value: "admin" },
];
const orderStatusGroup = [
  { label: "Success", value: "success" },
  { label: "Failed", value: "failed" },
  { label: "Pending", value: "pending" },
  { label: "No match", value: "no match" }
];
const orderServiceGroup = [
  { label: "Anti-Catfish Check", value: "Anti-Catfish" },
  { label: "Criminal Check", value: "Criminal" },
  { label: "Social Check", value: "Social" },
];

export {
  typeGroup,
  roleGroup,
  statusGroup,
  orderStatusGroup,
  orderServiceGroup,
};
