import { API_KEY, API_LINK } from "../constants";

async function fetchFromAPI(link) {
  const res = await fetch(`${API_LINK}${link}`, {
    headers: { Authorization: `Bearer ${API_KEY}` },
  });
  if (!res.ok) throw new Error(`Failed to fetch ${link}`);
  return res.json();
}

export const getTasks = () => fetchFromAPI("/tasks");
export const getStatuses = () => fetchFromAPI("/statuses");
export const getSingleTask = (id) => fetchFromAPI(`/tasks/${id}`);
export const getComments = (id) => fetchFromAPI(`/tasks/${id}/comments`);
export const getPriorities = () => fetchFromAPI("/priorities");
export const getDepartments = () => fetchFromAPI("/departments");
export const getEmployees = () => fetchFromAPI("/employees");
