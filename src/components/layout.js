import React, {useState} from 'react'
import Menu from "./menu";
import {Pagination} from '@material-ui/lab'
const App = (props, {onNavClick}) => {
  const [pageNumber, setPage] = useState(1)
  return (
    <div className="App">
      <Menu></Menu>
      <div style={mainDiv}>
        {/* Header */}
        <div style={headDiv}>
          <p style={people}>People</p>
        </div>
        {/* Card Wrapper */}
        {props.children}
        
        {/* Pagination */}
        <div style={pagination}>
           <Pagination count={10} defaultPage={pageNumber} siblingCount={1} onClick={onNavClick} />
        </div>
      </div>
    </div>
  );
};

// CSS
const mainDiv = {
  width: '100%',
  maxHeight: "100%",
  flexShrink: 0,
  justifyContent: "start",
  alignItems: "start",
  overflow: "hidden",
  display: 'flex',
  flexDirection: 'column',
};
const pagination = {
  boxSizing: "border-box",
  width: "100%",
  flexShrink: 0,
  height: 100,
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  overflow: "visible",
};

const headDiv = {
  boxSizing: "border-box",
  width: "100%",
  flexShrink: 0,
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: 20,
  overflow: "visible",
};
const people = {
  width: "100%" /* 121px */,
  height: "auto" /* 43px */,
  flexShrink: 0,
  overflow: "visible",
  whiteSpace: "pre",
  fontWeight: 700,
  fontFamily: `"Inter-Bold", "Inter", sans-serif`,
  letterSpacing: 0,
  lineHeight: 1.2,
  color: "#ffffff",
  fontSize: 20,
  margin: 0,
  padding: 0,
  textTransform: "uppercase",
};
export default App;
