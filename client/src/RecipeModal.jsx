import React from "react";
import { Button, Modal } from "react-bootstrap";

class RecipeModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { recipe, onHide } = this.props;
    return (
      <Modal {...this.props} size="lg" aria-labelledby="modal-title" centered>
        <Modal.Header closeButton>
          <Modal.Title id="modal-title">{recipe.label}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <img src={recipe.image}></img>
          <ul>
            {recipe.ingredientLines.map((ingredient, index) => {
              return <li key={index}>{ingredient}</li>;
            })}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>Close</Button>
          <a href={recipe.url} target="_blank">
            <Button onClick={() => console.log(`let's get cookin`)}>
              Find Recipe
            </Button>
          </a>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default RecipeModal;
