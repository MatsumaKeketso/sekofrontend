import "./App.scss";
import Menu from "./menu";
const App = () => {
  return (
    <div className="App">
      <Menu></Menu>
      <div
        style={{
          flex: 1,
          width: 1,
          height: "100%",
          flexShrink: 0,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          overflow: "visible",
          background: 'blue'
        }}
      >
       
      </div>
    </div>
  );
};

export default App;
