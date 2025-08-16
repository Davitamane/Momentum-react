import { API_KEY, API_LINK } from "../constants";

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
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) throw new Error(`Failed to post to ${link}`);
  return res.json();
}
async function postToAPIForm(link, body, isFormData = false) {
  const res = await fetch(`${link}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      ...(isFormData ? {} : { "Content-Type": "application/json" }),
    },
    body: isFormData ? body : JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Failed to post to ${link}: ${text}`);
  }
  return res.json();
}

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
