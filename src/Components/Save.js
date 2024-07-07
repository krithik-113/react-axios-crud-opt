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
}) => {
  const { id } = useParams();
  return (
    <div className="save">
      <h1>{id}</h1>
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
      <button>Save</button>
    </div>
  );
};

export default Save;
