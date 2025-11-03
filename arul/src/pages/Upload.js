import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Upload = () => {

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const age = form.age.value.trim();
    const img = form.img.value.trim();
    const food = form.food.value.trim();
    const des = form.des.value.trim();
    const price = form.price.value.trim();
    const quantity = 1;

    // Simple validation
    if (!age || !img || !food || !des || !price) {
      toast.warn('Please fill in all fields.');
      return;
    }

    const newData = { age, img, food, des, price, quantity };

    try {
      const response = await fetch('http://localhost:6200/max', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      toast.success('Data uploaded successfully!');
      form.reset();
      setTimeout(() => {
        window.location.href = "/Update";
      }, 1000);
    } catch (error) {
      console.error('Upload error:', error);
      toast.error('Failed to upload data.');
    }
  };

  return (
    <div className="container mt-4">
      <ToastContainer />

      <div className="card shadow-sm p-4">
        <h2 className="text-center mb-4">Upload Food Item</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="age" className="form-label"><b>Age</b></label>
            <input type="text" name="age" id="age" className="form-control" />
          </div>

          <div className="mb-3">
            <label htmlFor="img" className="form-label"><b>Image URL</b></label>
            <input type="text" name="img" id="img" className="form-control" />
          </div>

          <div className="mb-3">
            <label htmlFor="food" className="form-label"><b>Food Name</b></label>
            <input type="text" name="food" id="food" className="form-control" />
          </div>

          <div className="mb-3">
            <label htmlFor="des" className="form-label"><b>Description</b></label>
            <input type="text" name="des" id="des" className="form-control" />
          </div>

          <div className="mb-3">
            <label htmlFor="price" className="form-label"><b>Price</b></label>
            <input type="number" name="price" id="price" className="form-control" />
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary px-5">Upload</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Upload;
