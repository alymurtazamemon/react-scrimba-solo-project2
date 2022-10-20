import "./App.css";
import Navbar from "./components/Navbar.jsx";
import DataContainer from "./components/DataContainer.jsx";
import data from "./data";

function App() {
  const dataContainersComponents = data.map((obj) => (
    <DataContainer key={obj.id} obj={obj} />
  ));

  return (
    <div>
      <Navbar />
      {dataContainersComponents}
    </div>
  );
}

export default App;
