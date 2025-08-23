import { API_KEY, API_URL } from "../constants";

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
export const postToAPITask = async (link, taskData) => {

  const formData = new FormData();
  formData.append("name", taskData.title);
  formData.append("description", taskData.description);
  formData.append("due_date", taskData.dueDate);
  formData.append("status_id", taskData.statusId);
  formData.append("employee_id", taskData.employeeId);
  formData.append("priority_id", taskData.priorityId);

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

export const putToAPI = async (link, data) => {
  const res = await fetch(link, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error(`Failed to post employee`);
  }
};

export const getTasks = () => fetchFromAPI(`${API_URL}/tasks`);
export const getStatuses = () => fetchFromAPI(`${API_URL}/statuses`);
export const getSingleTask = (id) => fetchFromAPI(`${API_URL}/tasks/${id}`);
export const getComments = (id) =>
  fetchFromAPI(`/${API_URL}api/tasks/${id}/comments`);
export const getPriorities = () => fetchFromAPI(`${API_URL}/priorities`);
export const getDepartments = () => fetchFromAPI(`${API_URL}/departments`);
export const getEmployees = () => fetchFromAPI(`${API_URL}/employees`);

export const postComment = (id, commentData) =>
  postToAPI(`${API_URL}/tasks/${id}/comments`, commentData);

export const postEmployee = (modalData) =>
  postToAPIForm(`/${API_URL}api/employees`, modalData);

export const putStatus = (id, data) =>
  putToAPI(`/${API_URL}api/tasks/${id}`, data);
export const postTask = (data) => postToAPITask(`${API_URL}/tasks`, data);
