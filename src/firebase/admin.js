export const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL;

export function isAdminUser(user) {
  if (!user) return false;
  if (!ADMIN_EMAIL) return false;
  return user.email?.toLowerCase() === ADMIN_EMAIL.toLowerCase();
}
