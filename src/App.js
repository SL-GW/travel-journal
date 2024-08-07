import "./App.css";
import NavBar from "./NavBar";
import City from "./City";
import Data from "./Data";
import "./Reset.css";

function App() {
  const cities = Data.map((item) => {
    return <City Key={item.id} item={item} />;
  });

  return (
    <div className="App">
      <NavBar />
      <div className="city-list">{cities}</div>
    </div>
  );
}

export default App;
