import React , {useState} from "react";

import FormData from "./formData";
import HookUseStateExample from "./formDataFunct";


const About = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [lastNamePost ,  setlastNamePost] = useState("");
	function postDataToChild(e){ 
    debugger

		setLastName(e.target.value)
	setlastNamePost(e.target.value)

	console.log("lastNamePost=>",Date.now(),lastNamePost);
	}
  return (
    <div
      style={{
        display: "inherit",
        justifyContent: "Right",
        alignItems: "Right",
        height: "100vh",
      }}
    >
      <h1>call to child Component in parent component</h1>

      <form>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(event) => postDataToChild(event)
				
			}
          />
        </label>
        <br />
        <label>
          Age: 
          <input
            type="text"
            value={age}
            onChange={(event) => setAge(event.target.value)}
          />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
      <br />
      <div className="row">
        <div className="col-lg-6">
        <FormData  sendlastName={lastNamePost} />
        </div>
        <div className="col-lg-6">
        <HookUseStateExample send={lastNamePost} />
        </div>

      </div>

    

    </div>
  );
};

export default About;
