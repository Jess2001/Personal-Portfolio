import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";

export default function App() {
  return (
    <>
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap"
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </>
  );
}
