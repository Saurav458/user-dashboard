import React, { useState, useContext } from "react";
import { Typography, ListItemText, Button } from "@mui/material";
import { Link } from "react-router-dom";
import AddUser from "../AddUserPopup/AddUser";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { DashboardContext } from "../../context/ContextProvider";
import CircularProgress from "@mui/material/CircularProgress";
import { useFetchUsersList } from "../../hooks/UserListCustom";
import {
  UserListItem,
  UserListContainer,
  BoxWrapper,
  ListWrapper,
  ButtonWrapper,
} from "./UserListStyles";

const UserList = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [editingData, SetEditingData] = useState({});
  const { openModal, setOpenModal } = useContext(DashboardContext);
  const { users, setUsers } = useFetchUsersList();
  const handleDelete = (userId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };
  const handleClick = () => {
    setOpenModal(true);
    setIsEdit(false);
  };
  const handleEditing = (user) => {
    setOpenModal(true);
    setIsEdit(true);
    SetEditingData(user);
  };
  return (
    <UserListContainer>
      <BoxWrapper>
        <Typography variant="h4" gutterBottom>
          User List
        </Typography>
        {users.length > 0 && (
          <Button variant="contained" onClick={handleClick}>
            Add User
          </Button>
        )}
      </BoxWrapper>
      <ListWrapper>
        {users && users.length === 0 ? (
          <CircularProgress />
        ) : (
          users?.map((user) => (
            <UserListItem key={user.id}>
              <ListItemText
                primary={user.name}
                secondary={`${user.email}, ${user.address.city}`}
              />
              <ButtonWrapper>
                <Button variant="contained" onClick={() => handleEditing(user)}>
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  sx={{ marginLeft: "20px" }}
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </Button>
                <Link
                  to={`/user/${user.id}`}
                  key={user.id}
                  style={{ textDecoration: "none" }}
                >
                  <ChevronRightIcon />
                </Link>
              </ButtonWrapper>
            </UserListItem>
          ))
        )}
      </ListWrapper>

      {openModal && (
        <AddUser
          setOpenModal={setOpenModal}
          openModal={openModal}
          setUsers={setUsers}
          length={users.length}
          isEdit={isEdit}
          editingData={editingData}
        />
      )}
    </UserListContainer>
  );
};

export default UserList;
