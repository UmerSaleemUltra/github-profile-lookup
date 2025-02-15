import React, { useState } from "react";
import axios from "axios";

const GitHubProfileFinder = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");

  const fetchGitHubUser = async () => {
    try {
      setError(""); // Clear previous errors
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUserData(response.data);
    } catch (err) {
      setError("User not found!");
      setUserData(null);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-4">
      <h1 className="text-4xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
        GitHub Profile Finder
      </h1>

      {/* Search Input */}
      <div className="flex items-center space-x-4 bg-gray-800 p-3 rounded-lg shadow-lg">
        <input
          type="text"
          placeholder="Enter GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="px-4 py-2 text-black rounded-lg w-72 outline-none text-white"
        />
        <button
          onClick={fetchGitHubUser}
          className="bg-blue-500 hover:bg-blue-600 px-5 py-2 text-white font-semibold rounded-lg transition duration-300"
        >
          Search
        </button>
      </div>

      {/* Error Message */}
      {error && <p className="text-red-500 mt-4 text-lg">{error}</p>}

      {/* User Profile Card */}
      {userData && (
        <div className="bg-gray-900 bg-opacity-90 p-6 rounded-xl mt-6 flex flex-col items-center shadow-2xl border border-gray-700 w-96">
          <img
            src={userData.avatar_url}
            alt="Avatar"
            className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-lg"
          />
          <h2 className="text-2xl font-bold mt-4">{userData.name || "No Name Available"}</h2>
          <p className="text-gray-400">@{userData.login}</p>
          <p className="mt-2 text-center">{userData.bio || "No bio available"}</p>

          <div className="flex gap-6 mt-4 text-gray-300">
            <p>👥 Followers: <span className="font-bold">{userData.followers}</span></p>
            <p>📌 Repos: <span className="font-bold">{userData.public_repos}</span></p>
          </div>

          <a
            href={userData.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg font-semibold transition duration-300 shadow-md"
          >
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default GitHubProfileFinder;
