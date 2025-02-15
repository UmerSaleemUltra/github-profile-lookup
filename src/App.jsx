import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RedirectToPakistanDomain from "./redirect";
import GitHubProfileFinder from "./GithubProfilelookup";

const AppRoutes = () => {
  return (
    <Router>
      <RedirectToPakistanDomain />
      <Routes>
        <Route path="/" element={<GitHubProfileFinder />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
