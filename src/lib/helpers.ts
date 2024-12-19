export const nameInitials = (name: string) => {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("");
};
