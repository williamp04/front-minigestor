import api from "../api/axios";

export const updateMyProfile = async (data) => {
  const response = await api.put("/user/profile", data);
  return response.data;
};

export const updateUserProfile = async (userId, data) => {
  const response = await api.put(`/users/${userId}`, data);
  return response.data;
};
 