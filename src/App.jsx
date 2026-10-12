// src/App.jsx
import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import PageLayout from "./components/layout/PageLayout";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";

function App() {
  return (
    <Routes>
      {/* Home: fullpage scroll */}
      <Route
        path="/"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />

      {/* Resto: scroll nativo */}
      <Route element={<PageLayout />}>
        <Route path="/proyecto/:slug" element={<ProjectDetail />} />
      </Route>
    </Routes>
  );
}

export default App;