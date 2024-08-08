import React from "react";
import axios from "axios";
import FunctioBaseDemo from "../New folder/functionBased";
//import { useState } from "react";

/* const Home = () => {
	const firstName = ''
return (
	<div
	style={{
		//display: 'flex',
		justifyContent: 'Right',
		alignItems: 'Right',
		height: '100vh'
	}}
	>
	<h1>Welcome to GeeksforGeeks</h1>
	<form>
		<label>First Name</label>
		<input type="text" onKeyUp={count} value={firstName}></input>
	</form>
	</div>
);
function count(){
	console.log("Hyy"+firstName)
} 
}; */

import "../App.css";
class Home extends React.Component {
  // Constructor
  constructor(props) {
    super(props);
    //debugger
    this.currentPathname = null;
    this.currentSearch = null;
    this.search = new URL(window.location.href);
    this.searchPara = new URLSearchParams(this.search.search);
    console.log("search==>>", this.searchPara.get("code"));
    // window.history.pushState(null,null,window.location.href);
    window.history.forward();
    var options = {
      method: "POST",
      url: "https://dev-t90ft1sw.us.auth0.com/oauth/token",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      data: new URLSearchParams({
        grant_type: "authorization_code",
        client_id: "QdKMXl3vWxWmJ7ol3vQgQ5kiR7eQvG3e",
        client_secret:
          "2rx6EBPqYk6a4uCXvBSbHI3V-37ryNJOkB_5d0Ie_IpZF5yDUcyJAa37Kssfw5f4",
        code_verifier:
          "SIp4K0c-sBj6UumTTCasRjyp3gG_tWeCuMkC-j9_0secskC-C3QWvJVEJ5Z7qmqa9QVko2Fqni69uCwr7JB7XmZYNGM8xfyvtwr3wqzj3eZKtl23tjK8iD_8sZ_57s2c",
        code: this.searchPara.get("code"),
        redirect_uri: "http://localhost:3000/",
      }),
    };
    var options1 = {
      method: "POST",
      url: "http://janparichay.pehchaan.gov.in/v1/oauth/token",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      data: new URLSearchParams({
        grant_type: "authorization_code",
        client_id: "OauthTestRahul",
        code_verifier:
          "SIp4K0c-sBj6UumTTCasRjyp3gG_tWeCuMkC-j9_0secskC-C3QWvJVEJ5Z7qmqa9QVko2Fqni69uCwr7JB7XmZYNGM8xfyvtwr3wqzj3eZKtl23tjK8iD_8sZ_57s2c",
        code: this.searchPara.get("code"),
        redirect_uri: "http://localhost:3000/",
      }),
    };

    axios
      .request(options)
      .then(function (response) {
        console.log("Success=>", response.data);
      })
      .catch(function (error) {
        console.error("Error=>", error);
      });

    this.myName = "";
    this.specialArray = [];
    this.state = {
      items: [],
      newArray: [],
      DataisLoaded: true,
      formData: {
        sdgfds: "",
      },
    };
  }

  //axios({dsds:"dsc" });

  count(params) {}
  showValue(e) {
    // debugger;
    console.clear();
    let key = e.target.id;
    console.log("Key======>>", key);

    this.setState({
      //...this.state,
      formData: {
        ...this.state.formData,
        [key]: e.target.value,
      },
    });
    console.log("formData======>>", this.state.formData);
  }

  submitData() {
    debugger;
    console.clear();

    const obj = this.state.formData;
    console.log("this.state.firstName", this.state.formData);
    this.setState({ newArray: [...this.state.newArray, obj] });
    for (let key in obj) {
      this.setState({
        ...this.state.formData,
        formData: {
          [key]: "",
        },
      });
    }

    console.log("======>>>", this.state.newArray);
  }
  callAlert() {
    alert(876);
  }


  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });
  }
  render() {
    const { DataisLoaded, items, newArray } = this.state;

    if (!DataisLoaded)
      return (
        <div>
          <h1> Pleses wait some time.... </h1>{" "}
        </div>
      );
    {
      console.log(this.state);
    }

    return (
      <div className="App">
        <h1> Fetch data from an api in react </h1>{" "}
        <div className="col-lg "></div>
        <table>
          <thead></thead>
          <tbody>
            {newArray.map((item) => (
              <tr key={item.id}>
                <td>{item.firstName} </td>
                <td>{item.lastName} </td>
                <td>{item.gender} </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* {items.map((item) => (
          <ol key={item.id}>
            User_Name: {item.username}, Full_Name: {item.name}, User_Email:{" "}
            {item.email}
          </ol>
        ))} */}
        First Name :
        <input
          type="text"
          id="firstName"
          onChange={(e) => this.showValue(e)}
          value={this.state.formData.firstName}
        ></input>
        &nbsp;<b>{this.state.formData.firstName}</b>
        <br />
        <br />
        Last Name :{" "}
        <input
          type="text"
          id="lastName"
          onChange={(e) => this.showValue(e)}
          value={this.state.formData.lastName}
        ></input>{" "}
        <b>{this.state.lastName}</b>
        {this.state.formData.lastName}
        <br />
        <br />
        <label>
          <p>
            Gender: &nbsp; &nbsp;
            <select
              id="gender"
              onChange={(e) => this.showValue(e)}
              value={this.state.formData.gender}
            >
              <option>--Please choose an option--</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
          </p>
        </label>
        <br />
        <br />
        Agree with All
        <input type="checkbox" id="agreeAll" />
        <br />
        <br />
        <button type="button" onClick={(e) => this.submitData()}>
          Submit
        </button>
        <FunctioBaseDemo />
      </div>
    );
  }
}
// value={this.state.firstName}
export default Home;
