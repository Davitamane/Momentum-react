import { API_KEY } from "../constants";

async function fetchFromAPI(link) {
  const res = await fetch(link, {
    headers: { Authorization: `Bearer ${API_KEY}` },
  });
  if (!res.ok) throw new Error(`Failed to fetch ${link}`);
  return res.json();
}

async function postToAPI(link, body) {
  const res = await fetch(`${link}`, {
    method: "POST",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) throw new Error(`Failed to post to ${link}`);
  return res.json();
}
export const postToAPIForm = async (link, modalData) => {
  const formData = new FormData();
  formData.append("name", modalData.name);
  formData.append("surname", modalData.surname);
  formData.append("avatar", modalData.avatar);
  formData.append("department_id", modalData.department_id);

  const res = await fetch(link, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: formData,
  });
  console.log(formData);

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Failed to post employee: ${text}`);
  }

  return res.json();
};
// export function postToAPITask = async (link, taskData) => {

// }

export const getTasks = () => fetchFromAPI("/api/tasks");
export const getStatuses = () => fetchFromAPI("/api/statuses");
export const getSingleTask = (id) => fetchFromAPI(`/api/tasks/${id}`);
export const getComments = (id) => fetchFromAPI(`/api/tasks/${id}/comments`);
export const getPriorities = () => fetchFromAPI("/api/priorities");
export const getDepartments = () => fetchFromAPI("/api/departments");
export const getEmployees = () => fetchFromAPI("/api/employees");

export const postComment = (id, commentData) =>
  postToAPI(`/api/tasks/${id}/comments`, commentData);

export const postEmployee = (modalData) =>
  postToAPIForm("/api/employees", modalData);
