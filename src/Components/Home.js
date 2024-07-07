import React from 'react'
import { Link} from 'react-router-dom'

const Home = ({id, name, email,user}) => {
    return (
      <>
        <Link to={`/home/${id}`}>
          <div className="detail">
            <p>Name: {name}</p>
            <p>Email: {email}</p>
          </div>
        </Link> 
       <hr />
      </>
    );
}

export default Home