import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBInput
} from "mdbreact";
import UserContext from "../context/UserContext";
import "../stylesheets/AddIncome.css";

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
    this.setState({
      ["modal" + 14]: !this.state["modal" + 14]
    });
    const { nameIncome, valueIncome } = this.state;
    const incomeObj = { nameIncome, valueIncome };

    this.context.postIncome(incomeObj);
  };

  render() {
    return (
      <MDBContainer>
        <MDBBtn color='success' onClick={this.toggle(14)}>
          Income
        </MDBBtn>
        <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
          <MDBModalHeader toggle={this.toggle(14)}>
            Add Income{" "}
            <span role='img' aria-label='income-icon'>
              &#128536;
            </span>
          </MDBModalHeader>
          <MDBModalBody>
            <form>
              <MDBInput
                label='Income Type'
                type='text'
                name='nameIncome'
                value={this.state.nameIncome}
                onChange={this.changeHandler}
                placeholder='Ex. income name'
              />
              <MDBInput
                label='Income Value'
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

export default AddIncome;
