import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../constant/data";
export const useFetchUsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(API_URL);
        setUsers(response.data);
      } catch (error) {
        console.error("Error", error);
      }
    };

    fetchUsers();
  }, []);

  return { users, setUsers };
};
