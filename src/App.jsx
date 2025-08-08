import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./ui/Header";
import MainPage from "./pages/MainPage";
import TaskDetails from "./pages/TaskDetails";
import TaskCreation from "./pages/TaskCreation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />} />
        <Route index element={<Navigate replace to="mainPage" />} />
        <Route path="mainPage" element={<MainPage />} />
        <Route path="details" element={<TaskDetails />} />
        <Route path="create" element={<TaskCreation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
