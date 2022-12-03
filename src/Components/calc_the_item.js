import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const Calc = (props) => {
  return (
    <Container
      style={{
        backgroundColor: "#fff",
        color: "#000",
        border: "solid",
        borderRadius: "10px",
      }}
      className="p-1 mt-3"
    >
      <p>
        {props.quantity} x {props.pastry.name}
      </p>
      <div className="d-flex flex-row justify-content-around">
        <Button
          onClick={() => {
            props.setPastries((prevCandies) => {
              const idx = props.pastry.id - 1;
              let newPastries = { ...prevCandies };
              if (props.quantity > 1) {
                const quantity = props.quantity - 1;
                newPastries[idx] = quantity;
              } else {
                delete newPastries[idx];
              }
              return newPastries;
            });
          }}
          variant="warning"
        >
          Remove Single
        </Button>
        <Button
          onClick={() => {
            props.setPastries((prevCandies) => {
              const idx = props.pastry.id - 1;
              let newPastries = { ...prevCandies };
              delete newPastries[idx];
              return newPastries;
            });
          }}
          variant="danger"
        >
          Remove All
        </Button>
      </div>
    </Container>
  );
};

export default Calc;
