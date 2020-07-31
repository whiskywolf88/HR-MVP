import React from "react";
import { Modal, Button } from "react-bootstrap";

export default class Allergies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allergies: false,
      yes: false,
    };
    this.setAllergies = this.setAllergies.bind(this);
  }

  setAllergies() {
    this.setState({ allergies: true, yes: true });
  }

  render() {
    return (
      <Modal {...this.props} size="lg" aria-labelledby="modal-title" centered>
        <Modal.Header closeButton>
          <Modal.Title id="modal-title">Allergies</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <h1>Do you have any allergies?</h1>
          <Button className="yes-no" onClick={this.setAllergies}>
            Yes
          </Button>
          {this.state.allergies ? (
            <div>
              <form>
                <input
                  type="text"
                  name="allergies"
                  onChange={this.props.handleChange}
                  placeholder="type allergies here"
                ></input>
              </form>
            </div>
          ) : null}
          {!this.state.true ? (
            <Button className="yes-no" onClick={this.props.onHide}>
              No
            </Button>
          ) : null}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
