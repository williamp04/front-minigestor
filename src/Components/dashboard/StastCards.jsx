import { Grid, Paper, Typography } from "@mui/material";

const stats = [
  { label: "Tareas totales", value: 12 },
  { label: "Pendientes", value: 5 },
  { label: "En progreso", value: 4 },
  { label: "Completadas", value: 3 },
];

const StatsCards = () => {
  return (
    <Grid container spacing={2} mb={4}>
      {stats.map((item) => (
        <Grid item xs={12} sm={6} md={3} key={item.label}>
          <Paper
            elevation={0}
            sx={{
              p: 2,
              borderRadius: 2,
              border: "1px solid #e0e0e0",
            }}
          >
            <Typography variant="body2" color="text.secondary">
              {item.label}
            </Typography>
            <Typography variant="h5" fontWeight="bold">
              {item.value}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default StatsCards;
