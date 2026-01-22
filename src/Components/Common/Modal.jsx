import { Modal as MuiModal, Box, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Modal = ({ open, onClose, title, children }) => {
  return (
    <MuiModal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          borderRadius: 3,
          boxShadow: 24,
          p: 4,
          width: { xs: '90vw', sm: 500 },
          maxHeight: '90vh',
          overflowY: 'auto',
        }}
      >
        {title && (
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
            <Typography variant="h6" fontWeight="bold">{title}</Typography>
            <IconButton onClick={onClose}><CloseIcon /></IconButton>
          </Box>
        )}
        {children}
      </Box>
    </MuiModal>
  );
};

export default Modal;
