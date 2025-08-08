import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import TaskDetails from "./pages/TaskDetails";
import TaskCreation from "./pages/TaskCreation";
import AppLayout from "./ui/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="mainPage" />} />
          <Route path="mainPage" element={<MainPage />} />
          <Route path="details" element={<TaskDetails />} />
          <Route path="create" element={<TaskCreation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
