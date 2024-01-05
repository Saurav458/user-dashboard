import { ListItem, List, Container, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const UserListContainer = styled(Container)({
  marginTop: "16px",
  marginBottom: "16px",
});

export const UserListItem = styled(ListItem)(
  ({ borderColor = "#ccc", borderRadius = "4px" }) => ({
    border: `1px solid ${borderColor}`,
    borderRadius,
    marginBottom: "8px",
    "&:hover": {
      backgroundColor: "#f5f5f5",
    },
  })
);

export const BoxWrapper = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  "& > button": {
    width: "14%",
    height: "50px",
    fontSize: "19px",
    textTransform: "none",
    boxShadow: "0 2px 4px 0 rgb(0 0 0 / 20%)",
  },
});
export const ListWrapper = styled(List)({
  marginTop: "30px",
});
export const ButtonWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
});
