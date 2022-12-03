import React from "react";
import Container from "react-bootstrap/Container";
import { DropdownButton, Dropdown } from "react-bootstrap";

const Sort = (props) => {
  return (
    <>
      <Container className="d-flex flex-md-row flex-lg-row flex-xl-row flex-column justify-content-center my-4 mx-0">

        <div className="d-flex flex-row align-items-center px-2">
          <span style={{ fontSize: "10pt" }}>Sort by calories: </span>
          <DropdownButton
            variant="secondary"
            onSelect={props.changeCaloriesSort}
            title={props.cals}
            className="px-1"
            size={"sm"}
          >
            <Dropdown.Item eventKey="Select">All</Dropdown.Item>
            <Dropdown.Item eventKey="Low to High">Low to High</Dropdown.Item>
            <Dropdown.Item eventKey="High to Low">High to Low</Dropdown.Item>
          </DropdownButton>
        </div>

        <div className="d-flex flex-row align-items-center px-2">
          <span style={{ fontSize: "10pt" }}>Sort by price: </span>
          <DropdownButton
            variant="danger"
            onSelect={props.changePriceSort}
            title={props.price}
            className="px-1"
            size={"sm"}
          >
            <Dropdown.Item eventKey="Select">All</Dropdown.Item>
            <Dropdown.Item eventKey="Low to High">Low to High</Dropdown.Item>
            <Dropdown.Item eventKey="High to Low">High to Low</Dropdown.Item>
          </DropdownButton>
        </div>

        <div className="d-flex flex-row align-items-center px-2">
          <span style={{ fontSize: "10pt" }}>Filter by type:</span>
          <DropdownButton
            variant="success"
            onSelect={props.changeTypeFilter}
            title={props.type}
            className="px-1"
            size={"sm"}
          >
            <Dropdown.Item eventKey="All">All</Dropdown.Item>
            <Dropdown.Item eventKey="Pastry">Pastry</Dropdown.Item>
            <Dropdown.Item eventKey="Bread">Bread</Dropdown.Item>
            <Dropdown.Item eventKey="Cake">Cake</Dropdown.Item>
          </DropdownButton>
        </div>

        <div className="d-flex flex-row align-items-center px-2">
          <span style={{ fontSize: "10pt" }}>Filter by inventory amounts: </span>
          <DropdownButton
            variant="primary"
            onSelect={props.changeStockFilter}
            title={props.stock}
            className="px-1"
            size={"sm"}
          >
            <Dropdown.Item eventKey="All">All</Dropdown.Item>
            <Dropdown.Item eventKey="High">High</Dropdown.Item>
            <Dropdown.Item eventKey="Medium">Medium</Dropdown.Item>
            <Dropdown.Item eventKey="Low">Low</Dropdown.Item>
          </DropdownButton>
        </div>

      </Container>
    </>
  );
};

export default Sort;
