import { axiosPublic } from "../lib/axios/axios";

export function refreshToken() {
    return axiosPublic.get(`endpoint`,
    {
      withCredentials: true,
    });
  }