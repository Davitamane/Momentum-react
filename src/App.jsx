import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import TaskDetails from "./pages/TaskDetails";
import TaskCreation from "./pages/TaskCreation";
import AppLayout from "./ui/AppLayout";
import MainPageProvider from "./context/MainPageContext";
import ModalProvider from "./context/ModalContext";
import Modal from "./ui/Modal";

function App() {
  return (
    <BrowserRouter>
      <ModalProvider>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="mainPage" />} />
            <Route
              path="mainPage"
              element={
                <MainPageProvider>
                  <MainPage />
                </MainPageProvider>
              }
            />
            <Route path="details" element={<TaskDetails />} />
            <Route path="create" element={<TaskCreation />} />
          </Route>
        </Routes>
        <Modal />
      </ModalProvider>
    </BrowserRouter>
  );
}

export default App;
