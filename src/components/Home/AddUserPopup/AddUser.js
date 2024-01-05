import React, { useState } from "react";
import { Typography, TextField, Button, Dialog, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Component, WrapperButton } from "./AddUserStyles";
const AddUser = ({
  setOpenModal,
  openModal,
  setUsers,
  length,
  isEdit,
  editingData,
}) => {
  const [newUser, setNewUser] = useState({
    id: isEdit ? editingData.id : length + 1,
    name: isEdit ? editingData.name : "",
    email: isEdit ? editingData.email : "",
    address: {
      city: isEdit ? editingData?.address?.city : "",
    },
  });

  const handleAddUser = () => {
    if (!newUser.name || !newUser.email || !newUser.address.city) {
      alert("Please fill in all fields");
      return;
    }

    if (isEdit) {
      setUsers((prevUsers) =>
        prevUsers.map((user) => {
          if (user.id === newUser.id) {
            return newUser;
          }
          return user;
        })
      );
    } else {
      setUsers((prevUsers) => [...prevUsers, newUser]);
    }

    setNewUser({
      id: "",
      name: "",
      email: "",
      address: {
        city: "",
      },
    });
    setOpenModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "city") {
      setNewUser((prevUser) => ({
        ...prevUser,
        address: {
          ...prevUser.address,
          city: value,
        },
      }));
    } else {
      setNewUser((prevUser) => ({
        ...prevUser,
        [name]: value,
      }));
    }
  };
  return (
    <Dialog open={openModal}>
      <Component>
        <Box>
          <Typography variant="h6" gutterBottom>
            {isEdit ? "Edit" : "Add"} New User
          </Typography>
          <CloseIcon
            onClick={() => setOpenModal(false)}
            sx={{ cursor: "pointer" }}
          />
        </Box>
        <form>
          <TextField
            label="Name"
            name="name"
            value={newUser.name}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            name="email"
            value={newUser.email}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Address"
            name="city"
            value={newUser.address.city}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />

          <WrapperButton>
            <Button variant="contained" color="primary" onClick={handleAddUser} data-testid='saveBtn'>
              {isEdit ? "Edit User Data" : "Save User Data"}
            </Button>
          </WrapperButton>
        </form>
      </Component>
    </Dialog>
  );
};
export default AddUser;
