import React from "react";
import { Modal, Button } from "react-bootstrap";

export default class Allergies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allergies: false,
      // yes: false,
    };
    this.setAllergies = this.setAllergies.bind(this);
  }

  setAllergies() {
    this.setState({ allergies: true });
  }

  render() {
    return (
      <Modal {...this.props} size="lg" aria-labelledby="modal-title" centered>
        <Modal.Header closeButton>
          <Modal.Title id="modal-title">Allergies</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          {!this.state.allergies ? (
            <div>
              <h1>Do you have any allergies?</h1>
              <Button className="yes-no" onClick={this.setAllergies}>
                Yes
              </Button>
              <Button className="yes-no" onClick={this.props.onHide}>
                No
              </Button>
            </div>
          ) : (
            <div>
              Please separate multiple allergies by space (no commas)
              <form className='modal-body'>
                <input
                  type="text"
                  name="allergies"
                  onChange={this.props.handleChange}
                  placeholder="Type allergies here"
                ></input>
              </form>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Submit</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
