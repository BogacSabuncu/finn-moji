import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from "mdbreact";
import { withRouter } from "react-router-dom";
import UserContext from "../context/UserContext";
// import Auth from "../utils/Auth";
import API from "../utils/API";

class AddIncome extends Component {
  static contextType = UserContext;
  state = {
    modal14: false,
    nameIncome: "",
    valueIncome: ""
  };

  toggle = nr => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  };

  changeHandler = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  addIncomeHandler = e => {
    e.preventDefault();
    const { nameIncome, valueIncome } = this.state;
    if (nameIncome) {
      API.addIncome({
        nameIncome,
        valueIncome
      });
    }
  };

  render() {
    return (
      <MDBContainer>
        <MDBBtn color='primary' onClick={this.toggle(14)}>
          Add Income
        </MDBBtn>
        <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
          <MDBModalHeader toggle={this.toggle(14)}>
            MDBModal title
          </MDBModalHeader>
          <MDBModalBody>
            <form>
              <input
                type='text'
                name='nameIncome'
                value={this.state.nameIncome}
                onChange={this.changeHandler}
                placeholder='Ex. income name'
              />
              <input
                type='text'
                name='valueIncome'
                value={this.state.valueIncome}
                onChange={this.changeHandler}
                placeholder='Income. Value'
              />
            </form>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color='secondary' onClick={this.toggle(14)}>
              Close
            </MDBBtn>
            <MDBBtn
              type='submit'
              onClick={this.addIncomeHandler}
              color='primary'
            >
              Save Income
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default withRouter(AddIncome);
