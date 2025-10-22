import { useAuthStore } from "@/stores/auth";

export const can = (permission) => {
  const authStore = useAuthStore();

  const userPermissions = authStore.user?.permission || [];

  return userPermissions.includes(permission);
};
