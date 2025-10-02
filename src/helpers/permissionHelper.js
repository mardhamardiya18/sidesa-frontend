export const can = (permission) => {
  const authStore = useAuthStore();

  const userPermissions = authStore.user?.permissions || [];

  return userPermissions.includes(permission);
};
