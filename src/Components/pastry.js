import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Pastry = (props) => {
  const imgPath = "./assets/" + props.pastriesProperties.imageName;
  const cardStyle = {
    textAlign: "center",
    height: "100%",
    backgroundColor: '#E1F4FF',
  };


  return (
    <Card style={cardStyle}>
      <Card.Body>
        <Card.Img variant="top" src={imgPath}></Card.Img>
        <Card.Title>
          {" "}
          {props.pastriesProperties.name}
        </Card.Title>
        <Card.Text>
        <span>Price: {props.pastriesProperties.price}$</span>
          <br />
          <span>Type: {props.pastriesProperties.type}</span>
          <br />
          <span>Calories: {props.pastriesProperties.calories}</span>
          <br />
          <span>Inventory: {props.pastriesProperties.inv}</span>
        </Card.Text>
        <Button 
          onClick={() => {
            props.setPastries((prevCandies) => {
              const idx = props.pastriesProperties.id - 1;
              const newPastries = { ...prevCandies };
              newPastries[idx] = (newPastries[idx] || 0) + 1;
              return newPastries;
            });
          }}
          variant="primary"
        >
          Add to Favorites
        </Button>
      </Card.Body>
    </Card>
  );
};
export default Pastry;
