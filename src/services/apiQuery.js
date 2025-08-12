import { API_KEY, API_LINK } from "../constants";

export async function getTasks() {
  const res = await fetch(`${API_LINK}/tasks`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  if (!res.ok) throw new Error("Failed to fetch tasks");
  const data = await res.json();

  return data;
}

export async function getStatuses() {
  const res = await fetch(`${API_LINK}/statuses`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  if (!res.ok) throw new Error("Failed to fetch statuses");
  const data = await res.json();

  return data;
}
export async function getSingleTask(id) {
  const res = await fetch(`${API_LINK}/tasks/${id}`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  if (!res.ok) throw new Error("Failed to fetch statuses");
  const data = await res.json();

  return data;
}
