import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';


import { Link } from 'react-router-dom';
import { FiEdit } from "react-icons/fi";
import './Updated.css'

const Update = () => {

  const [ProductItems, setProductItems] = useState([]);
  useEffect(() => {

    fetch(`http://localhost:6200/getmax`)

      .then((res) => res.json())
      .then((data) => setProductItems(data))
      .catch((error) => {
        console.error('Fetch error:', error);
        toast.error('Failed to load data');
      });
      
  }, []);

const DeleteItems = (id) => {

    fetch(`http://localhost:6200/del/${id}`, {

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
      <div className='center-container'>
<table class="table table-hover ">
          <thead>
            <tr>

              <th>Age</th>
              <th>IMAGE</th>
              <th>DES</th>
              <th>PRICE</th>
              <th>FOODTYPE</th>
              <th>QUANTITY</th>
              <th>ACTIONS</th>

            </tr>
          </thead>
          <tbody>

            {ProductItems?.map((Item) => (

              <tr key={Item._id}>
                <td>{Item.age}</td>
                <td><img src={Item.img} alt=''/></td>
                <td>{Item.des}</td>
                <td>{Item.price}</td>
                <td>{Item.food}</td>
                <td>{Item.quantity}</td>

                <td>
                  <button
                    className='table3'
                    onClick={() => DeleteItems(Item._id)}> Delete
                  </button>

                  <Link to={`/edit1/${Item._id}`}>

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
export default Update;

