import React, { useState } from "react";
import { useDispatch } from "react-redux";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { createContent } from "../action/newContentAction";
import jwt_decode from "jwt-decode";

const NewContent = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [type, setType] = useState('');
  const [image, setImage] = useState(null);
  const [id, setID] = useState(jwt_decode(localStorage.getItem('token')));

  const handleTitleChange = (e) => {
    const titleInput = e.target.value;
    setTitle(titleInput);
  };

  const handleBodyChange = (e) => {
    const bodyInput = e.target.value;
    setBody(bodyInput);
  };

  const handleTypeChange = (e) => {
    const typeInput = e.target.value;
    setType(typeInput);
  };

  const handleImageChange = (e) => {
    const imageInput = e.target.files[0]; // Get the first selected file
    setImage(imageInput);
  };

  const handleIdChange = (e) => {
    const idInput = e.target.value;
    setID(idInput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
    const formData = new FormData();
    formData.append('title', title);
    formData.append('body', body);
    formData.append('type', type);
    formData.append('id', id);

    // Append the image file if it exists
    if (image) {
      formData.append('fileType', image);
    }
    console.log(formData, "formData")
    dispatch(createContent(formData));

    // Clear the form fields
    setTitle('');
    setBody('');
    setType('');
    setImage(null);
    setID('');
  };

  return (
    <div>
      <TextField
        required
        id="filled-required"
        label="content title"
        value={title}
        variant="filled"
        onChange={handleTitleChange}
      />
      <br />
      <TextField
        required
        id="filled-required"
        label="caption"
        value={body}
        variant="filled"
        onChange={handleBodyChange}
      />
      <br />
      <TextField
        required
        id="filled-required"
        label="video/image"
        value={type}
        variant="filled"
        onChange={handleTypeChange}
      />
      <br />
      <TextField
        required
        id="filled-required"
        label="creatorId"
        value={id}
        variant="filled"
        onChange={handleIdChange}
      />
      <br />
      <input
        type="file"
        accept="image/*" // Specify the accepted file types here
        onChange={handleImageChange}
      />
      <br />
      <Button variant="outlined" onClick={handleSubmit}>
        Post
      </Button>
    </div>
  );
};

export default NewContent;
