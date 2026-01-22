import { Box, Typography, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

import { useUsers } from "../../hooks/useUsers";
import UsersGrid from "../../Components/Users/UserGrid";
import Modal from "../../components/Common/modal";
import UserDetailModalContent from "../../components/users/UserDetailModalContent";

const ListUser = () => {
  const { users, loading, error } = useUsers();
  const [search, setSearch] = useState("");

  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleOpenUser = (user) => {
    setSelectedUser(user);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedUser(null);
  };

  const filteredUsers = users.filter((user) =>
    `${user.name} ${user.last_name || ""}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <Box>
      <Typography variant="h5" fontWeight="bold" mb={2}>
        Users
      </Typography>

      <Box mb={3} maxWidth={300}>
        <TextField
          fullWidth
          size="small"
          placeholder="Buscar (Nombre)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="small" />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {loading && <Typography>Cargando usuarios...</Typography>}
      {error && <Typography color="error">Error al cargar usuarios</Typography>}

      {!loading && !error && (
        <UsersGrid
          users={filteredUsers}
          onUserDoubleClick={handleOpenUser}
        />
      )}

      <Modal
        open={open}
        onClose={handleClose}
        title={selectedUser ? `Tasks de ${selectedUser.name}` : ""}
      >
        {selectedUser && (
          <UserDetailModalContent user={selectedUser} />
        )}
      </Modal>
    </Box>
  );
};

export default ListUser;
