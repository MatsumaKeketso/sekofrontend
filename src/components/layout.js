import Menu from "./menu";
import Card from "./cardItem";
import Modal from "react-modal";
import Pagination from "./pagination";
const App = (props) => {
  const clickHandler =  (e) => {
    console.log(e);
  }
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
        <Pagination containerStyling={pagination}>

        </Pagination>
      </div>
    </div>
  );
};

// CSS
const mainDiv = {
  flex: 1,
  width: 1,
  height: "100%",
  flexShrink: 0,
  justifyContent: "start",
  alignItems: "start",
  overflow: "visible",
  display: 'flex',
  flexDirection: 'column'
};
const pagination = {
  boxSizing: "border-box",
  width: "100%",
  flexShrink: 0,
  height: 90,
  display: "flex",
//   flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: 20,
  overflow: "visible",
};

const headDiv = {
  boxSizing: "border-box",
  width: "100%",
  flexShrink: 0,
  height: 83,
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: 20,
  overflow: "visible",
};
const people = {
  width: "auto" /* 121px */,
  height: "auto" /* 43px */,
  flexShrink: 0,
  overflow: "visible",
  whiteSpace: "pre",
  fontWeight: 700,
  fontFamily: `"Inter-Bold", "Inter", sans-serif`,
  letterSpacing: 0,
  lineHeight: 1.2,
  color: "#ffffff",
  fontSize: 36,
  margin: 0,
  padding: 0,
};
export default App;
