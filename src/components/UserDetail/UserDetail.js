import React from "react";
import { useParams } from "react-router-dom";
import {
  Typography,
  Grid,
  Paper,
  Card,
  CardMedia,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useFetchUserDetail } from "../hooks/UserDetailCustom";
import { BoxWrapper } from "./UserDetailStyles";
const UserDetail = () => {
  const { userId } = useParams();
  const userInfo = useFetchUserDetail(userId);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <BoxWrapper style={{ padding: "20px" }}>
      {userInfo ? (
        <Grid container spacing={3} sx={{ marginTop: "20px" }}>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={`https://source.unsplash.com/200x200/?portrait/${userId}`}
                alt={userInfo.name}
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Paper elevation={2} style={{ padding: "30px" }}>
              <Typography variant="h4" gutterBottom>
                {userInfo.name}
              </Typography>
              <Typography variant="subtitle1">
                Email: {userInfo.email}, City: {userInfo.address.city}
              </Typography>
              <Typography variant="subtitle1">
                Phone: {userInfo.phone}, Website: {userInfo.website}
              </Typography>
              <Typography variant="subtitle1">
                Company: {userInfo.company.name}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sx={{ marginTop: "60px" }}>
            <Button variant="contained" onClick={handleBack}>
              Back to Dashboard
            </Button>
          </Grid>
        </Grid>
      ) : (
        <Typography variant="body1">Loading...</Typography>
      )}
    </BoxWrapper>
  );
};

export default UserDetail;
