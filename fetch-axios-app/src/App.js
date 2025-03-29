import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [fact, setFact] = useState("");
  const fetchClick = () => {
    fetchFact()
  }
  const axiosClick = () => {
    fetchFact1()
   }
  const fetchFact = () => {
    fetch("https://catfact.ninja/fact").then((response) => response.json()).then((data) => setFact(data.fact));
  }
  const fetchFact1 = () => {
    axios.get("https://catfact.ninja/fact").then((response) => {setFact(response.data.fact)});
  }
  useEffect(() => {fetchFact()}, []);
  return (
    <div className="App">
    <h2>FETCH AND AXIOS</h2>
    <button class="btn" onClick= {() => fetchClick()}>using fetch Getting Cat fact </button>
    <button class="btn" onClick= {() => axiosClick()}>using axios Getting cat fact </button>
    <p>{fact}</p>
    </div>
  );
}
export default App;

