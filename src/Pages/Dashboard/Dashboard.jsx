import { Box, Typography } from "@mui/material";
import { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import KanbanBoard from "../../components/dashboard/KanbanBoard";
import DashboardFilters from "../../components/dashboard/DashboardFilters";
import Modal from "../../components/common/Modal";
import TaskForm from "../../components/forms/TaskForm";
import TaskPreview from "../../components/Task/TaskPreview";
import { useUsers } from "../../hooks/useUsers";
import { createTask, setTasks } from "../../store/slices/tasksSlice";
import api from "../../api/axios";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.tasks);
  const { user } = useSelector((state) => state.auth);
  const { users } = useUsers();

  const [statusFilter, setStatusFilter] = useState("");
  const [searchFilter, setSearchFilter] = useState("");
  const [assigneeFilter, setAssigneeFilter] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [anchorRect, setAnchorRect] = useState(null);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const { data } = await api.get("/tasks");
        dispatch(setTasks(data));
      } catch (error) {
        console.error(error);
      }
    };
    fetchTasks();
  }, [dispatch]);

  const filteredTasks = useMemo(() => {
    if (!tasks) return [];
    let filtered = [...tasks];

    if (statusFilter) filtered = filtered.filter(t => t.task_status === statusFilter);
    if (searchFilter) {
      const s = searchFilter.toLowerCase();
      filtered = filtered.filter(
        t => t.title.toLowerCase().includes(s) || t.description?.toLowerCase().includes(s)
      );
    }
    if (user.role === 'admin' && assigneeFilter) {
      filtered = filtered.filter(
        t => t.assigned?.id == assigneeFilter || t.user_assigned == assigneeFilter
      );
    }

    return filtered;
  }, [tasks, user, assigneeFilter, statusFilter, searchFilter]);

  const handleUpdateTask = async (data) => {
    await api.put(`/tasks/${editingTask.id}`, data);
    const { data: refreshed } = await api.get("/tasks");
    dispatch(setTasks(refreshed));
    setEditingTask(null);
  };

  const handleTaskClick = (task, event) => {
    if (!event?.currentTarget) return;
    const rect = event.currentTarget.getBoundingClientRect();
    setAnchorRect(rect);
    setSelectedTask(task);
  };

  const handleTaskDoubleClick = (task) => {
    setEditingTask(task);
    setSelectedTask(null);
  };

  return (
    <Box sx={{ width: '100%', maxWidth: '1280px', mx: 'auto', px: 2 }}>
      <Typography variant="h5" fontWeight="bold" mb={3}>
        Mi espacio Kanban
      </Typography>

      <DashboardFilters
        users={users}
        status={statusFilter}
        setStatus={setStatusFilter}
        search={searchFilter}
        setSearch={setSearchFilter}
        assignee={assigneeFilter}
        setAssignee={setAssigneeFilter}
        onAdd={() => setOpenModal(true)}
      />

      <KanbanBoard
        tasks={filteredTasks}
        onTaskClick={handleTaskClick}
        onTaskDoubleClick={handleTaskDoubleClick}
      />

      {selectedTask && anchorRect && (
        <TaskPreview
          task={selectedTask}
          anchorRect={anchorRect}
          onClose={() => setSelectedTask(null)}
          onEdit={(t) => {
            setEditingTask(t);
            setSelectedTask(null);
          }}
        />
      )}

      <Modal open={openModal} onClose={() => setOpenModal(false)} title="Crear tarea">
        <TaskForm
          users={users}
          onSubmit={async (d) => {
            await dispatch(createTask(d)).unwrap();
            setOpenModal(false);
          }}
          onCancel={() => setOpenModal(false)}
        />
      </Modal>

      <Modal open={!!editingTask} onClose={() => setEditingTask(null)} title="Editar tarea">
        <TaskForm
          initialData={editingTask}
          users={users}
          onSubmit={handleUpdateTask}
          onCancel={() => setEditingTask(null)}
        />
      </Modal>
    </Box>
  );
};

export default Dashboard;
