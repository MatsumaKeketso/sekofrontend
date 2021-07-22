import React, {useState, useEffect} from 'react'
import "./App.scss";
import Card from "./components/cardItem";
import Layout from "./components/layout";
const App = () => {
  const [people, setPeople] = useState([])
  const [openModal, setModal] = useState(false)
  const clickHandler = (e) => {
    console.log(e);
  };
  useEffect(()=> {
    fetch('https://swapi.dev/api//people').then(res => {
      res.json().then(data => {
        setPeople(data.results)
      })
    })
  }, [])
  function modal (props) {
    console.log('hello', props);
  }
  return (
    <div className="App">
      {modal && (<></>)}
      <Layout>
        {/* People */}
        <div style={stackWrapper}>
          <div style={stack}>
          {people.map((p, i) => (
            <Card key={i} name={p.name} gender={p.gender} birth={p.birth_year} onChildClick={modal}></Card>
          ))}
        </div>
        </div>
      </Layout>
    </div>
  );
};

// CSS
const stack = {
  width: "100%",
  maxHeight: '100%',
  display: "flex",
  flexWrap: "wrap",
  alignItems: "flex-start",
};
const stackWrapper = {
  width: "100%",
  height: '100%',
  display: "flex",
  flexWrap: "wrap",
  alignItems: "flex-start",
  padding: 10,
  overflowY: "auto",
};
export default App;
