import React from 'react';
import { toast, ToastContainer } from 'react-toastify';


import 'react-toastify/dist/ReactToastify.css';

const SignupForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const phone = form.phone.value;
    const gender = form.gender.value;
    const dress = form.dress.value;
    
    const hobbies = [
      form.hobby1.checked && 'Reading',
      form.hobby2.checked && 'Gaming',
      form.hobby3.checked && 'Cooking',
    ].filter(Boolean); // remove false
    const profilePic = form.profilePic.value;
    const bio = form.bio.value;

    // Basic validation
    if (!name || !email || !password || !phone || !gender || !dress || !profilePic || !bio) {
      toast.warn('Please fill in all required fields.');
      return;
    }

    const formData = {
      name,
      email,
      password,
      phone,
      gender,
      favoriteDress: dress,
      hobbies,
      profilePic,
      bio,
    };

    // Simulate POST request
    fetch('https://maxprojectbackend.onrender.com/maxsignup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (res.ok) {
          toast.success('Signup successful!');
          form.reset();
          // Optional: redirect
          window.location.href = '/Signupupdate';
        } else {
          throw new Error('Signup failed');
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error('Signup failed. Try again.');
      });
  };

  return (
    <div className="container mt-4 signup1">
      <ToastContainer />

      <div className="card p-4">
        <h2 className="mb-4">User Signup</h2>
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-3">
            <label><b>Name</b></label>
            <input type="text" name="name" className="form-control" required />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label><b>Email</b></label>
            <input type="email" name="email" className="form-control" required />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label><b>Password</b></label>
            <input type="password" name="password" className="form-control" required />
          </div>

          {/* Age */}
          <div className="mb-3">
            <label><b>Phone No</b></label>
            <input type="number" name="phone" className="form-control" min="1" required />
          </div>

          {/* Gender (Radio buttons) */}
          <div className="mb-3">
            <label><b>Gender</b></label>
            <div>
              <label className="me-3">
                <input type="radio" name="gender" value="Male" required /> Male
              </label>
              <label className="me-3">
                <input type="radio" name="gender" value="Female" /> Female
              </label>
              <label>
                <input type="radio" name="gender" value="Other" /> Other
              </label>
            </div>
          </div>

          {/* Favorite Food (Select Dropdown) */}
          <div className="mb-3">
            <label><b>Favorite Dress</b></label>
            <select name="dress" className="form-select" required>
              <option value="">Select one</option>
              <option value="Classic">Classic</option>
              <option value="Mordern">Mordern</option>
              <option value="Western">Western</option>
              <option value="Traditional">Traditional</option>
            </select>
          </div>

          {/* Hobbies (Checkboxes) */}
          <div className="mb-3">
            <label><b>Hobbies</b></label>
            <div>
              <label className="me-3">
                <input type="checkbox" name="hobby1" /> Reading
              </label>
              <label className="me-3">
                <input type="checkbox" name="hobby2" /> Gaming
              </label>
              <label>
                <input type="checkbox" name="hobby3" /> Cooking
              </label>
            </div>
          </div>

          {/* Profile Picture URL (Text Input) */}
          <div className="mb-3">
            <label><b>Profile Picture URL</b></label>
            <input type="text" name="profilePic" className="form-control" required />
          </div>

          {/* Bio (Textarea) */}
          <div className="mb-3">
            <label><b>Short Bio</b></label>
            <textarea name="bio" className="form-control" rows="4" required></textarea>
          </div>

          {/* Submit */}
          <div className="mb-3">
            <button type="submit" className="btn btn-success">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
