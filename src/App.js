import React, {useState, useEffect} from 'react'
import "./App.scss";
import Card from "./components/cardItem";
import Layout from "./components/layout";
const App = () => {
  const [people, setPeople] = useState([])

  const clickHandler = (e) => {
    console.log(e);
  };
  useEffect(()=> {
    fetch('https://swapi.dev/api//people').then(res => {
      res.json().then(data => {
        setPeople(data.results)
        console.log(people);
      })
    })
  }, [])
  return (
    <div className="App">
      <Layout>
        {/* People */}
        <div style={stack}>
          {people.map((p, i) => (
            <Card key={i} name={p.name} gender={p.gender} birth={p.birth_year}></Card>
          ))}
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
  // justifyContent: "flex-start",
  alignItems: "flex-start",
  padding: 10,
  overflowY: "auto",
};
export default App;
