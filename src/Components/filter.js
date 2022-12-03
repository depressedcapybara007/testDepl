import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Pastry from "./pastry";
import Sort from "./sort_dat";
import { Button } from "react-bootstrap";

function FilteredList(props) {
  // state variables
  const [displayedData, setDisplayedData] = useState(props.data);

  // used to update list of candies displayed
  const updateList = () => {
    let localData = props.data;

    // type filter
    localData = localData.filter((pastry) => {
      return props.selectedType === "All" || pastry.type === props.selectedType;
    });

    // brand filter
    localData = localData.filter((pastry) => {
      return (
        props.selectedStock === "All" || pastry.inv === props.selectedStock
      );
    });

    // sort by calories
    if (props.cals !== "Select") {
      let mult = props.cals !== "High to Low" ? 1 : -1;
      localData.sort((pastryA, pastryB) => {
        if (pastryA.calories < pastryB.calories) {
          return -1 * mult;
        } else if (pastryA.calories > pastryB.calories) {
          return 1 * mult;
        } else {
          return 0;
        }
      });
      console.log(localData);
    }

    // sort by sugar
    if (props.price !== "Select") {
      let mult = props.price !== "High to Low" ? 1 : -1;
      localData.sort((pastryA, pastryB) => {
        if (pastryA.price < pastryB.price) {
          return -1 * mult;
        } else if (pastryA.price > pastryB.price) {
          return 1 * mult;
        } else {
          return 0;
        }
      });
    }

    setDisplayedData(localData);
  };

  useEffect(() => {
    updateList();
  });

  return (
    <Container
      style={{ backgroundColor: "#fff", color: "#000" }}
      className="p-4"
    >
      <div className="d-flex flex-row justify-content-center">
        <h1 style={{ position: "relative", left: "3rem" }}>Pastries</h1>

      </div>
      <Sort
        stock={props.selectedStock}
        changeStockFilter={props.changeStockFilter}
        type={props.selectedType}
        changeTypeFilter={props.changeTypeFilter}
        cals={props.cals}
        changeCaloriesSort={props.changeCaloriesSort}
        price={props.price}
        changePriceSort={props.changePriceSort}
        satfat={props.satfat}
        changeSatFatSort={props.changeSatFatSort}
      />
              <Button
          variant="danger"
          size="sm"
          style={{ position: "relative"}}
          onClick={() => {
            props.changeStockFilter("All");
            props.changeTypeFilter("All");
            props.changeCaloriesSort("Select");
            props.changePriceSort("Select");
            props.changeSatFatSort("Select");
          }}
        >
          Reset All Filtering
        </Button>
      <Row className="d-flex flex-wrap">
        {displayedData.map((pastry) => (
          <Col md={4} sm={6} key={pastry.id} className="my-2">
            <Pastry pastriesProperties={pastry} setPastries={props.setPastries} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default FilteredList;
