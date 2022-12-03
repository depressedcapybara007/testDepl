import "./App.css";
import { useState } from "react";
import FilteredList from "./Components/filter";
import { pas_data } from "./Data/cakeData";
import Calculator from "./Components/calc";

function App() {
  const [type, setType] = useState("All");
  const [cals, setCals] = useState("Select");
  const [price, setPrice] = useState("Select");
  const [stock, setStock] = useState("All");
  const [pastries, setPastries] = useState({});

  const headerStyle = {
    textAlign: "center",
  };
  const textStyle = {
    color: "#FFF",
  };

  const changeStockFilter = (filterName) => {
    setStock(filterName);
  };
  const changeTypeFilter = (filterName) => {
    setType(filterName);
  };
  const changeCaloriesSort = (sortName) => {
    setPrice("Select");
    setCals(sortName);
  };
    const changePriceSort = (sortName) => {
    setCals("Select");
    setPrice(sortName);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div style={headerStyle} className="pt-4 pb-4">
          <h1 style={textStyle}>csci 1300 UI/UX Emporium</h1>
        </div>
      </header>
      <div className="d-flex flex-row">
        <FilteredList
          selectedType={type}
          changeTypeFilter={changeTypeFilter}
          cals={cals}
          changeCaloriesSort={changeCaloriesSort}
          selectedStock={stock}
          changeStockFilter={changeStockFilter}
          price={price}
          changePriceSort={changePriceSort}
          data={pas_data}
          setPastries={setPastries}
        />
        <Calculator
          setPastries={setPastries}
          pastriesData={pas_data}
          pastries={pastries}
        />
      </div>
    </div>
  );
}

export default App;
