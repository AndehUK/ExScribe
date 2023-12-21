export const formatUsername = (username: string): string => {
  return `${username}'${username.endsWith("s") ? "" : "s"}`;
};
