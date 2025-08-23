import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import TaskDetails from "./pages/TaskDetails";
import TaskCreation from "./pages/TaskCreation";
import AppLayout from "./ui/AppLayout";
import MainPageProvider from "./context/MainPageContext";
import ModalProvider from "./context/ModalContext";
import Modal from "./ui/Modal";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
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
              <Route path="details/:id" element={<TaskDetails />} />
              <Route path="create" element={<TaskCreation />} />
            </Route>
          </Routes>
          <Modal />
        </ModalProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
