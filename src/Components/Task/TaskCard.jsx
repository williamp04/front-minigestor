import { Card, CardContent, Typography } from "@mui/material";

const TaskCard = ({ task, onClick, onDoubleClick }) => {
  return (
    <Card
      sx={{ cursor: "pointer", boxShadow: 4, width: '100%' }}
      onClick={(event) => onClick?.(task, event)}
      onDoubleClick={(event) => onDoubleClick?.(task, event)}
    >
      <CardContent sx={{ p: { xs: 1, sm: 2 } }}>
        <Typography fontWeight="bold" noWrap>{task.title}</Typography>

        {task.assigned && (
          <Typography variant="body2" color="text.secondary" noWrap>
            Asignado a: {task.assigned.name}
          </Typography>
        )}

        {task.creator && (
          <Typography variant="body2" color="text.secondary" noWrap>
            Creado por: {task.creator.name}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default TaskCard;
