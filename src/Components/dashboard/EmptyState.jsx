import { Box, Typography, Button } from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";

const EmptyState = ({ title = "Sin tareas", description = "No hay información para mostrar", actionLabel, onAction }) => {
  return (
    <Box sx={{ textAlign: "center", py: 4, px: 2, color: "text.secondary" }}>
      <InboxIcon sx={{ fontSize: { xs: 36, sm: 48 }, mb: 1 }} />
      <Typography variant="subtitle1" fontWeight="bold">{title}</Typography>
      <Typography variant="body2" mb={actionLabel ? 2 : 0}>{description}</Typography>
      {actionLabel && <Button size="small" variant="contained" onClick={onAction}>{actionLabel}</Button>}
    </Box>
  );
};

export default EmptyState;
