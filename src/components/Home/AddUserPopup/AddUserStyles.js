import { Box, styled } from "@mui/material";

export const Component = styled(Box)({
  height: "50vh",
  width: "90%",
  padding: "30px",
  paddingTop: "0",
  borderRadius: "10px",
  "&>div,& > h6": {
    marginTop: "30px",
    fontWeight: "bold",
  },
  "&>div": {
    display: "flex",
    justifyContent: "space-between",
  },
});
export const WrapperButton = styled(Box)({
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  marginTop: "20px",
  "& > button": {
    width: "100%",
    fontSize: "20px",
    textTransform: "none",
    boxShadow: "0 2px 4px 0 rgb(0 0 0 / 20%)",
  },
});
