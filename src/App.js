import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Components/Home";
import Info from "./Components/Info";
import Add from "./Components/Add";
import Save from "./Components/Save";

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
   const API_URL = "https://sample-react-deploy.netlify.app/db.json";
  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => setUser(response.data))
      .catch((err) => console.log(`Error: ${err.message}`));
  }, []);
  // ------------------------------------------------------------

  let [userName, setUserName] = useState("");
  let [userEmail, setUserEmail] = useState("");

  async function handleAddData(name, email) {
    if (name.length === 0) {
    } else if (email.length === 0) {
    } else {
      let listItem = [...user];
      listItem.push({
        id: user.length > 0 ? user[user.length - 1].id + 1 : 1,
        name: name,
        email: email,
      });
      setUser(listItem.reverse());
      setUserName("");
      setUserEmail("");
      console.log(listItem);
      navigate("/");
      
    }
  }

  const [addressStreet, setAddressStreet] = useState("");
  const [addressSuite, setAddressSuite] = useState("");
  const [addressCity, setAddressCity] = useState("");
  const [addressZipcode, setAddressZipcode] = useState("");
  const [phone, setPhone] = useState("");

  function AddInfo(id, saveName, saveEmail) {
    if (
      addressStreet.length !== 0 &&
      addressSuite.length !== 0 &&
      addressCity.length !== 0 &&
      addressZipcode.length !== 0 &&
      phone.length !== 0
    ) {
     console.log(id);
let listItems = [...user];
listItems = listItems.filter((val) => val.id != id)
     

      

      listItems.push({
        id: id,
        name: saveName,
        email: saveEmail,
        address: {
          street: addressStreet,
          suite: addressSuite,
          city: addressCity,
          zipcode: addressZipcode,
        },
        phone: phone,
      })
      setUser(listItems.reverse());
      setAddressStreet("");
      setAddressSuite("");
      setAddressCity("");
      setAddressZipcode("");
      setPhone("");
      console.log(listItems);
      navigate("/");
    } else {
      alert(
        "Phone No. should be atleat 10 numbers (or) fill all the fields :-)"
      );
    }
  }

  function handleDelete(id) {
    let listItem = [...user];
    listItem = listItem.filter((val) => {
      return val.id != id;
    });
    setUser(listItem.reverse());
    console.log(id, listItem);
    navigate("/");
  }

  function handleEditing(street, suite, city, zipcode, phone) {
    setAddressStreet(street);
    setAddressSuite(suite);
    setAddressCity(city);
    setAddressZipcode(zipcode);
    setPhone(phone);
  }

 
      
  
  
  return (
    <div className="App">
      <header>
        <h1>User List</h1>
        <div className="nav">
          <Link to="/">
            <div>
              <h1>Home</h1>
            </div>
          </Link>

          <Link to="/add">
            <div>
              <h1>Add</h1>
            </div>
          </Link>
        </div>
      </header>
      <Routes>
        <Route
          path="/"
          element={
            user.length ? (
              <div className="a">
                {user.map((val) => {
                  return (
                    <Home
                      key={`${val.id}-${val.name}`}
                      id={val.id}
                      name={val.name}
                      email={val.email}
                      user={user}
                    />
                  );
                })}
              </div>
            ) : (
              <h1> "No Data Present Kindly Refresh The Page"</h1>
            )
          }
        />

        <Route
          path="/add"
          element={
            <Add
              userName={userName}
              setUserName={setUserName}
              userEmail={userEmail}
              setUserEmail={setUserEmail}
              handleAddData={handleAddData}
            />
          }
        />

        <Route
          path="/home/:id"
          element={
            <Info
              user={user}
              handleDelete={handleDelete}
              handleEditing={handleEditing}
            />
          }
        />

        <Route
          path="/save/:id"
          element={
            <Save
              addressStreet={addressStreet}
              setAddressStreet={setAddressStreet}
              addressSuite={addressSuite}
              setAddressSuite={setAddressSuite}
              addressCity={addressCity}
              setAddressCity={setAddressCity}
              addressZipcode={addressZipcode}
              setAddressZipcode={setAddressZipcode}
              phone={phone}
              setPhone={setPhone}
              handleDelete={handleDelete}
              user={user}
              AddInfo={AddInfo}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
