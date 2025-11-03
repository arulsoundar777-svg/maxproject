import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';


import { Link } from 'react-router-dom';
import { FiEdit } from "react-icons/fi";
import './Updated.css'

const Signupupdate = () => {

  const [ProductItems, setProductItems] = useState([]);
  useEffect(() => {

    fetch(`http://localhost:6200/getsignup`)

      .then((res) => res.json())
      .then((data) => setProductItems(data))
      .catch((error) => {
        console.error('Fetch error:', error);
        toast.error('Failed to load data');
      });
      
  }, []);

const DeleteItems = (id) => {

    fetch(`http://localhost:6200/delsignup/${id}`, {

      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        toast.error('Deleted successfully');
        setProductItems((prevProductItems) =>
          prevProductItems.filter((Item) => Item._id !== id)
        );
      })

      .catch((error) => {
        console.error('Delete error:', error);
        toast.error('Failed to delete item');
      });
  };

  return (

    <div className='card table2 tbl1'>
      <div className='center-container tbl2'>
<table class="table table-hover ">
          <thead>
            <tr>

              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Phone No</th>
              <th>Gender</th>
              <th>favoriteDress</th>
              <th>Hobbies</th>
              <th>profilePic</th>
              <th>bio</th>

            </tr>
          </thead>
          <tbody>

            {ProductItems?.map((Item) => (

              <tr key={Item._id}>

                <td>{Item.name}</td>
                <td>{Item.email}</td>
                {/* <td><img src={Item.img} alt=''/></td> */}
                <td>{Item.password}</td>
                <td>{Item.phone}</td>
                <td>{Item.gender}</td>
                <td>{Item.favoriteDress}</td>
                <td>
                

                            {
                       
                        Item.hobbies.map((a,index)=>(
                            // console.log(a)
                            <h6 key={index}>{a}</h6>
                        ))
                    }
                            
                
                </td>
                <td><img src={Item.profilePic} alt='' /></td>
                <td>{Item.bio}</td>

                <td>
                  <button
                    className='table3'
                    onClick={() => DeleteItems(Item._id)}> Delete
                  </button>

                  <Link to={`/editsignup/${Item._id}`}>

                    <button>
                      <FiEdit />
                    </button>

                  </Link>
                </td>
              </tr>

            ))}
          </tbody>
</table>

      </div>
    </div>
  );
};
export default Signupupdate;

