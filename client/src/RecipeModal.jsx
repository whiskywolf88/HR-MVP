import React from "react";
import { Modal, Button } from "react-bootstrap";

class RecipeModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const { recipe } = this.props;
    console.log(this.props.recipe);
    return (
      <>
        <Modal
          {...this.props}
          onHide={this.props.onHide}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Recipe Name</Modal.Title>
          </Modal.Header>
          <Modal.Body>Ingredients List / find the full {this.props.recipe.label} here</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.onHide}>
              Close
            </Button>
            <Button variant="primary" onClick={() => console.log(`let's cook`)}>
              Find Recipe
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default RecipeModal;
