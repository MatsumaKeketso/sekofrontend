import React, { useState, useEffect } from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import bg from "./assets/image/bg.jpg";
import Menu from "./components/menu";
import Pagination from "react-bootstrap/Pagination";
import Person from './components/person'
import ModalData from './components/modal'
const App = () => {
  const [people, setPeople] = useState([]);
  const [openModal, setModal] = useState(false);
  const clickHandler = (e) => {
    console.log(e);
  };
  useEffect(() => {
    fetch("https://swapi.dev/api/people").then((res) => {
      res.json().then((data) => {
        setPeople(data.results);
      });
    });
  }, []);
  function modal(props) {
    setModal(true);
  }
  const closeModal =() => {
    setModal(false)
  }
  return (
    <div style={container}>
      {openModal && (<ModalData closeModal={closeModal}></ModalData>)}
      <div className="color-offset">
        <div className="header">
          <div className="header-info">
            <p className="star-wars-a-p-i "> Star Wars API</p>
            <p className="s-w-a-p-i">SWAPI</p>
            <p className="text">
              Welcome to the swapi, the Star Wars API! This documentation should
              help you familiarise yourself with the resources available and how
              to consume them with HTTP requests.
            </p>
          </div>
          <div className="logo-wrapper">
            <div className="orig-starwars-logo"></div>
          </div>
        </div>
        <div className="content">
          <div className="content-n-av">
            <p style={explore}>Explore</p>
            <div className="navWrapper">
              <Menu></Menu>
            </div>
          </div>
          <div className="list-wraper">
            <div className="personWrap">
              {
                people.map((data, i) => {
                  console.log(data);
                  return (<Person key={i} name={data.name} onPress={modal}></Person>)
                })
              }
            </div>

          </div>
          <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item disabled>{14}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </div>
      </div>
    </div>
  );
};
// styling

// container
const container = {
  width: "100%",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  background: `url(${bg})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
};
const explore = {
  width: "auto" /* 76px */,
  height: "auto" /* 24px */,
  flexShrink: 0,
  overflow: "visible",
  whiteSpace: "pre",
  color: "#ffffff",
  lineHeight: 1.2,
  fontWeight: 900,
  fontFamily: `"Inter-Black", "Inter", sans-serif`,
  letterSpacing: 0,
  fontSize: 20,
  margin: 0,
};
export default App;
