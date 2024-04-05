import instance from "./instance";

export const getPositions = async () => {
  try {
    const { data } = await instance.get("/positions");

    return data;
  } catch (error) {
    return error;
  }
};
