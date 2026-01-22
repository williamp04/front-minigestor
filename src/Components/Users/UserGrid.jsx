import { Grid } from "@mui/material";
import UserCard from "./UserCard";

const UsersGrid = ({ users, onUserDoubleClick }) => {
  return (
    <Grid container spacing={2}>
      {users.map((user) => (
        <Grid item xs={12} sm={6} md={3} key={user.id}>
          <UserCard
            user={user}
            onDoubleClick={onUserDoubleClick}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default UsersGrid;
