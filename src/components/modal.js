import React from "react";

const ModalData = (props) => {
  return (
    <div style={modalData}>
      <div style={header}></div>
      <div style={bio}></div>
      <div style={stats}></div>
    </div>
  );
};
// styling
const modalData = {
  boxSizing: "border-box",
  height: "auto" /* 461px */,
  width: 709,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  padding: 10,
  backgroundColor: "var(--token-7169fcc9-ceaa-45cd-8a23-e903c131f6af, #121212)",
  overflow: "hidden",
  borderRadius: 8,
};
const header = {
    boxSizing: "border-box",
    width: "100%",
    flexShrink: 0,
    height: 102,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 20,
    backgroundColor: "var(--token-f804f6d4-a2fc-4e16-bcc4-31c3196c40bd, #ffbd2e)",
    overflow: "visible",
    borderRadius: 8,
  }
  const bio = {
    boxSizing: "border-box",
    width: "100%",
    flexShrink: 0,
    height: 108,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    overflow: "visible",
  }
  const stats = {
    width: "100%",
    flexShrink: 0,
    height: 211,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    overflow: "hidden",
  }
export default ModalData;
