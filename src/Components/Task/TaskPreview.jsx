import { Box, Card, CardContent, Typography, IconButton, Tooltip } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";

const TaskPreview = ({ task, anchorRect, onClose, onEdit, onDoubleClick }) => {
  if (!task || !anchorRect) return null;

  const previewWidth = 340;
  const windowWidth = window.innerWidth;
  const spaceRight = windowWidth - anchorRect.right;
  const showRight = spaceRight > previewWidth + 50; 

  const top = anchorRect.top + window.scrollY;
  let left = showRight ? anchorRect.right + 12 : anchorRect.left - previewWidth - 12;

  // Ajuste para móviles
  if (windowWidth < 500) {
    left = 12;
  }

  return (
    <Box
      sx={{
        position: "absolute",
        top,
        left,
        zIndex: 1300,
        display: "flex",
        alignItems: "flex-start",
        flexDirection: showRight ? "row" : "row-reverse",
        animation: "previewFadeIn 200ms ease-out",
        maxWidth: '95vw'
      }}
      onDoubleClick={() => onDoubleClick?.(task)}
    >
      <Box
        sx={{
          width: 0,
          height: 0,
          mt: 2,
          borderTop: "10px solid transparent",
          borderBottom: "10px solid transparent",
          borderRight: showRight ? "10px solid" : "none",
          borderLeft: showRight ? "none" : "10px solid",
          borderRightColor: showRight ? "background.paper" : "transparent",
          borderLeftColor: showRight ? "transparent" : "background.paper",
          filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.2))",
        }}
      />

      <Card sx={{ width: previewWidth, maxWidth: '95vw', boxShadow: 8, animation: "cardPop 200ms ease-out" }}>
        <CardContent>
          <Box display="flex" justifyContent="space-between" alignItems="flex-start">
            <Typography fontWeight="bold" variant="h6" sx={{ mr: 1, lineHeight: 1.2 }}>
              {task.title}
            </Typography>

            <Box display="flex" gap={0.5}>
              <Tooltip title="Editar tarea" arrow>
                <IconButton size="small" onClick={e => { e.stopPropagation(); onEdit?.(task); }}>
                  <EditIcon fontSize="small" />
                </IconButton>
              </Tooltip>

              <Tooltip title="Cerrar" arrow>
                <IconButton size="small" onClick={onClose}>
                  <CloseIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>

          <Typography
            variant="body2"
            color="text.secondary"
            dangerouslySetInnerHTML={{ __html: task.description || "Sin descripción" }}
            mt={2}
            sx={{ maxHeight: 200, overflowY: 'auto' }}
          />

          <Box mt={2} pt={2} borderTop="1px solid #eee">
            <Typography variant="caption" color="text.secondary" display="block">Estado:</Typography>
            <Typography variant="body2" fontWeight="500">{task.task_status}</Typography>
          </Box>

          <Box mt={1}>
            <Typography variant="caption" color="text.secondary" display="block">Asignado a:</Typography>
            <Typography variant="body2">
              {task.assigned ? `${task.assigned.name} ${task.assigned.last_name || ''}` : "Sin asignar"}
            </Typography>
          </Box>
        </CardContent>
      </Card>

      <style>
        {`
          @keyframes previewFadeIn {
            from { opacity: 0; transform: translateY(-5px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes cardPop {
            from { transform: scale(0.98); }
            to { transform: scale(1); }
          }
        `}
      </style>
    </Box>
  );
};

export default TaskPreview;
