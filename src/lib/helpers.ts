import axios from "axios";

export const nameInitials = (name: string) => {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("");
};

export const placeholderAvatar = (size: number = 300) => {
  return `https://i.pravatar.cc/${size}`;
};
export const placeholderImage = (height: number = 500, width: number = 500) => {
  return `https://picsum.photos/seed/picsum/${height}/${width}`;
};

// axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
// axios.defaults.withCredentials = true;
