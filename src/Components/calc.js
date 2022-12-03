import React from "react";
import Container from "react-bootstrap/Container";
import Calc from "./calc_the_item";

const Calculator = (props) => {
  return (
    <Container
      style={{ backgroundColor: "#fff", color: "#000", width: "33%" }}
      className="pt-4"
    >
      <h2 className="mb-4">Favorites</h2>
      {Object.entries(props.pastries).length === 0 ? (
        <p>It's empty mate. Add something!</p>
      ) : (
        <>
          <p>
            Total Calories: {" "}
            {(function () {
              let total = 0;
              Object.entries(props.pastries).forEach(([index, quantity]) => {
                const pastry = props.pastriesData[Number(index)];
                total += pastry.calories * quantity;
              });
              return total;
            })()}
             cal
          </p>
          <p>
            Total Price: {" "}
            {(function () {
              let total = 0;
              Object.entries(props.pastries).forEach(([index, quantity]) => {
                const pastry = props.pastriesData[Number(index)];
                total += pastry.price * quantity;
              });
              return total;
            })()}
            $
          </p>
          {Object.entries(props.pastries).map(([index, quantity]) => {
            const pastry = props.pastriesData[Number(index)];
            return (
              <Calc
                quantity={quantity}
                key={index}
                pastry={pastry}
                setPastries={props.setPastries}
              />
            );
          })}
        </>
      )}
    </Container>
  );
};

export default Calculator;
