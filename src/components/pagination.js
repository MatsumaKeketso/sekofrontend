import React from "react";
import ReactPaginate from "react-paginate";
const Pagination = ({containerStyling}) => {
  return (
    <ReactPaginate
      activeClassName={activeLink}
      containerClassName={containerStyling}
    ></ReactPaginate>
  );
};
const paginationContainer = {
  boxSizing: "border-box",
  width: "auto" /* 310px */,
  height: "auto" /* 60px */,
  flexShrink: 0,
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  padding: 10,
  overflow: "visible",
  borderRadius: 8,
};
const activeLink = {
  boxSizing: "border-box",
  flexShrink: 0,
  width: 40,
  height: 40,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignItems: "center",
  backgroundColor: "#0a0a0a",
  overflow: "visible",
  borderRadius: 20,
  border: `1px solid var(--token-f804f6d4-a2fc-4e16-bcc4-31c3196c40bd, #ffbd2e) /* {"name":"primary"} */`,
};
export default Pagination;
