import React, { Component } from "react";

class FormDemo extends Component {
  constructor(props) {
    super();
    this.state = {
        items: ""
    };
   debugger

   this.setState({
        items : props.lastName
    })
   console.log(props.sendlastName);
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmitForm() {
    this.props.onFormSubmit(this.state)
  }

  render() {
    const recieveProps = this.props.sendlastName
    return (
      <div style={{"border": "1px solid blue;" }}>
        <b> Class based Component </b>
        <table>
          <tr>
            <td>First Name :</td>
            <td>
              <input type="text" name="fname" onChange={this.onInputChange} />
            </td>
          </tr>
          <tr>
            <td>Last Name :</td>
            <td>
              <input type="text" name="lname" onChange={this.onInputChange} value={recieveProps}/>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={this.onSubmitForm}>Submit</button>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default FormDemo;
