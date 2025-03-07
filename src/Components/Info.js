import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Info = ({ user, handleDelete, handleEditing }) => {
  const { id } = useParams();
  return (
    <div className="info">
      {user.map((val) => {
        if (val.id == id) {
          return (
            <div key={`${val.id}-${val.address}`}>
              <div>Name: {val.name}</div>
              <div>Email: {val.email}</div>
              <br />
              <div>Address: </div>
              {val.address ? (
                <div className="address" key={`${val.id}-${val.phone}`}>
                  <div>Street: {val.address.street}</div>
                  <div>Suite: {val.address.suite}</div>
                  <div>City: {val.address.city}</div>
                  <div>Zipcode: {val.address.zipcode}</div>
                  <br />
                  <div>Phone: {val.phone}</div>

                  <Link to={`/save/${val.id}`}>
                    <button
                      onClick={() =>
                        handleEditing(
                          val.address.street,
                          val.address.suite,
                          val.address.city,
                          val.address.zipcode,
                          val.phone
                        )
                      }
                    >
                      Edit
                    </button>
                  </Link>

                  <button onClick={() => handleDelete(val.id)}>Delete</button>
                </div>
              ) : (
                <div className="emptyEdit">
                  <Link to={`/save/${val.id}`}>
                    <button>Edit</button>
                  </Link>
                  <button onClick={() => handleDelete(id)}>Delete</button>
                </div>
              )}
            </div>
          );
        }
        return "";
      })}
    </div>
  );
};

export default Info