import React from "react";
import { useParams } from "react-router-dom";

const Save = ({
  addressStreet,
  setAddressStreet,
  addressSuite,
  setAddressSuite,
  addressCity,
  setAddressCity,
  addressZipcode,
  setAddressZipcode,
  phone,
  setPhone,
  user,
  AddInfo,
}) => {
  const { id } = useParams();
  return (
    <div className="save">
      {user.map((val) => {
        if (val.id == id) {
          return (
            
            <div key={`${val.id}-${val.email}`}>
              <h3>Name: {val.name}</h3>
              <h3>Email: {val.email}</h3>
            </div>
          );
        }
      })}
      <div>
        <label htmlFor="street">Street</label>
       
        <input
          id="street"
          type="text"
          placeholder="Enter 
        Street"
          value={addressStreet}
          onChange={(e) => setAddressStreet(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="suite">Suite</label>
        <input
          id="suite"
          type="text"
          placeholder="Enter Suite"
          value={addressSuite}
          onChange={(e) => setAddressSuite(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="city">City</label>
        <input
          id="city"
          type="text"
          placeholder="Enter City"
          value={addressCity}
          onChange={(e) => setAddressCity(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="Zipcode">Zipcode</label>
        <input
          id="Zipcode"
          type="number"
          placeholder="Enter Zipcode"
          value={addressZipcode}
          onChange={(e) => setAddressZipcode(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          type="number"
          placeholder="Enter phone no."
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      {user.map((val, index) => {
        if (val.id == id) {
          return <button key={index} onClick={() => AddInfo(id, val.name, val.email)}>Save</button>;
        
        }
      })}
      
    </div>
  );
};

export default Save;
