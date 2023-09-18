import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { createCreator } from '../action/creatorAction';


const Creator = () => {
  const id = useSelector(state => state.users.users.map(user => user._id));
      console.log(id, 'creatorId')

  const dispatch = useDispatch()
  const [bio, setBio] = useState('');
  const [categories, setCategories] = useState('');
  // const [userId, setUserId] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);

  const handleBioChange = (e) => {
    const inputChange = e.target.value;
    setBio(inputChange);
  };

  const handleCategoryChange = (e) => {
    const inputChange = e.target.value;
    setCategories(inputChange);
  };

  // const handleUseIdChange = (e) => {
  //   const inputChange = e.target.value;
  //   setUserId(inputChange);
  // };
  const handleImageChange = (e) => {
    // Access the selected image file from the input element
    const selectedImage = e.target.files[0];
    setProfilePicture(selectedImage);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Create an object containing the form data
    const formData = {
      bio: bio,
      categories: categories,
      profilePicture: profilePicture, // Add the image to formData
    };
  
    // Dispatch the updateFormData action with the formData as its payload
    dispatch(createCreator(formData, id)); // Assuming you have access to dispatch
  
    // Optionally, you can reset the form fields or perform other actions
    setBio('');
    setCategories('');
    // setUserId('');
    setProfilePicture(null);
  };

  return (
    <div >
      <TextField
        required
        id="filled-required"
        label="Bio"
        value={bio}
        variant="filled"
        onChange={handleBioChange}
      />
      <br />
      <TextField
        required
        id="filled-required"
        label="Categories"
        value={categories}
        variant="filled"
        onChange={handleCategoryChange}
      />
      <br />
      {/* <TextField
        required
        id="filled-required"
        label="User ID"
        value={userId}
        variant="filled"
        onChange={handleUseIdChange}
      />
      <br /> */}
      <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        <br />
      <Button variant="outlined" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default Creator;
