import React, { useEffect, useState } from "react";

const FunctioBaseDemo = (props) => {
  const [count, setCount] = useState(0);
  function fillCountProps(props) {
    return props;
  }
  const [list, setList] = useState([]);
  const ll = [{}];
  const countryList = [
    {
      city: "Delhi",
      lat: "28.6600",
      lng: "77.2300",
      country: "India",
      iso2: "IN",
      admin_name: "Delhi",
      capital: "admin",
      population: "29617000",
      population_proper: "16753235",
    },
    {
      city: "Bangalore",
      lat: "12.9699",
      lng: "77.5980",
      country: "India",
      iso2: "IN",
      admin_name: "Karnātaka",
      capital: "admin",
      population: "13707000",
      population_proper: "8443675",
    },
    {
      city: "Chennai",
      lat: "13.0825",
      lng: "80.2750",
      country: "India",
      iso2: "IN",
      admin_name: "Tamil Nādu",
      capital: "admin",
      population: "11324000",
      population_proper: "6727000",
    },
    {
      city: "Hyderābād",
      lat: "17.3667",
      lng: "78.4667",
      country: "India",
      iso2: "IN",
      admin_name: "Telangana",
      capital: "admin",
      population: "9746000",
      population_proper: "6993262",
    },
    {
      city: "Pune",
      lat: "18.5196",
      lng: "73.8553",
      country: "India",
      iso2: "IN",
      admin_name: "Mahārāshtra",
      capital: "",
      population: "7764000",
      population_proper: "3124458",
    },
    {
      city: "Ahmedabad",
      lat: "23.0300",
      lng: "72.5800",
      country: "India",
      iso2: "IN",
      admin_name: "Gujarāt",
      capital: "minor",
      population: "7410000",
      population_proper: "5570585",
    },
    {
      city: "Sūrat",
      lat: "21.1700",
      lng: "72.8300",
      country: "India",
      iso2: "IN",
      admin_name: "Gujarāt",
      capital: "",
      population: "5807000",
      population_proper: "4466826",
    },
    {
      city: "Lucknow",
      lat: "26.8470",
      lng: "80.9470",
      country: "India",
      iso2: "IN",
      admin_name: "Uttar Pradesh",
      capital: "admin",
      population: "3382000",
      population_proper: "3382000",
    },
    {
      city: "Jaipur",
      lat: "26.9167",
      lng: "75.8667",
      country: "India",
      iso2: "IN",
      admin_name: "Rājasthān",
      capital: "admin",
      population: "3073350",
      population_proper: "3073350",
    },
    {
      city: "Nāgpur",
      lat: "21.1539",
      lng: "79.0831",
      country: "India",
      iso2: "IN",
      admin_name: "Mahārāshtra",
      capital: "",
      population: "2405665",
      population_proper: "2405665",
    },
    {
      city: "Ghāziābād",
      lat: "28.6667",
      lng: "77.4167",
      country: "India",
      iso2: "IN",
      admin_name: "Uttar Pradesh",
      capital: "",
      population: "2381452",
      population_proper: "2381452",
    },
    {
      city: "Indore",
      lat: "22.7206",
      lng: "75.8472",
      country: "India",
      iso2: "IN",
      admin_name: "Madhya Pradesh",
      capital: "",
      population: "2201927",
      population_proper: "2201927",
    },
    {
      city: "Vadodara",
      lat: "22.3000",
      lng: "73.2000",
      country: "India",
      iso2: "IN",
      admin_name: "Gujarāt",
      capital: "",
      population: "2065771",
      population_proper: "2065771",
    },
    {
      city: "Vishākhapatnam",
      lat: "17.7333",
      lng: "83.3167",
      country: "India",
      iso2: "IN",
      admin_name: "Andhra Pradesh",
      capital: "",
      population: "2035922",
      population_proper: "2035922",
    },
    {
      city: "Bhopāl",
      lat: "23.2500",
      lng: "77.4167",
      country: "India",
      iso2: "IN",
      admin_name: "Madhya Pradesh",
      capital: "admin",
      population: "1883381",
      population_proper: "1883381",
    },
    {
      city: "Ludhiāna",
      lat: "30.9083",
      lng: "75.8486",
      country: "India",
      iso2: "IN",
      admin_name: "Punjab",
      capital: "",
      population: "1649000",
      population_proper: "1545368",
    },
    {
      city: "Āgra",
      lat: "27.1800",
      lng: "78.0200",
      country: "India",
      iso2: "IN",
      admin_name: "Uttar Pradesh",
      capital: "",
      population: "1585705",
      population_proper: "1585705",
    },
    {
      city: "Madurai",
      lat: "9.9197",
      lng: "78.1194",
      country: "India",
      iso2: "IN",
      admin_name: "Tamil Nādu",
      capital: "minor",
      population: "1561129",
      population_proper: "1561129",
    },
    {
      city: "Jamshedpur",
      lat: "22.8000",
      lng: "86.1833",
      country: "India",
      iso2: "IN",
      admin_name: "Jharkhand",
      capital: "",
      population: "1558000",
      population_proper: "1558000",
    },
    {
      city: "Nāsik",
      lat: "20.0000",
      lng: "73.7833",
      country: "India",
      iso2: "IN",
      admin_name: "Mahārāshtra",
      capital: "",
      population: "1486053",
      population_proper: "1486053",
    },
    {
      city: "Farīdābād",
      lat: "28.4333",
      lng: "77.3167",
      country: "India",
      iso2: "IN",
      admin_name: "Haryāna",
      capital: "",
      population: "1394000",
      population_proper: "1394000",
    },
    {
      city: "Aurangābād",
      lat: "19.8800",
      lng: "75.3200",
      country: "India",
      iso2: "IN",
      admin_name: "Mahārāshtra",
      capital: "",
      population: "1371330",
      population_proper: "1371330",
    },
    {
      city: "Rājkot",
      lat: "22.2969",
      lng: "70.7984",
      country: "India",
      iso2: "IN",
      admin_name: "Gujarāt",
      capital: "",
      population: "1335397",
      population_proper: "1335397",
    },
  ];

  useEffect(() => {
    ahit();
  }, []);

  function ahit() {
    setList([...list, ...countryList]);
  }

  return (
    <div>
      <p>You clicked {fillCountProps} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <input
        type="text"
        id="lastName"
        onChange={(e) => {
          debugger;
          this.showValue(e);
        }}
        value={props.sendProps}
      ></input>
      <ul>
        {list.map((obj) => (
          <li style={{width : "fit-content"}}>{obj.city}</li>
        ))}
      </ul>     
    </div>
  );
};

export default FunctioBaseDemo;
