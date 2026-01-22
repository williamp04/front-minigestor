import { Avatar } from "@mui/material";
import { AVATAR_SIZES } from "../../constants/avatarSizes";
import { getAvatarColor } from "./../Utils/GetAvatarColor";

const UserAvatar = ({ user, size = "md" }) => {
  if (!user) return null;
  const px = AVATAR_SIZES[size] || 40;
  const initial = user.name?.[0]?.toUpperCase() || "?";
  const bgColor = getAvatarColor(user.email || user.name);

  return <Avatar sx={{ width: px, height: px, fontSize: px / 2.2, bgcolor: bgColor }}>{initial}</Avatar>;
};

export default UserAvatar;
