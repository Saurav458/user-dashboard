import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchUserDetail = (userId) => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        setUserInfo(response.data);
      } catch (error) {
        console.error("Error fetching user data: ", error);
      }
    };

    fetchUser();
  }, [userId]);

  return userInfo;
};
