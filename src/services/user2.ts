import { BASE_URL, USERS } from "../constants/endpoints2";
import { FilterType } from "../models/filter";

const getUsers = async (filter: FilterType) => {
  try {
    const query = new URLSearchParams(filter).toString();
    const response = await fetch(`${BASE_URL}${USERS}?${query}`);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch users: ${response.status} ${response.statusText}`
      );
    }
    const data = await response.json();
    console.log("data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export { getUsers };
