import { useState } from "react";
import SearchBar from "./components/SearchBar";
import UserInfo from "./components/UserInfo";

function App() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");

  const fetchUserData = async () => {
    try {
      setError("");
      setUserData(null);
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error("User not found");
      }
      const data = await response.json();
      setUserData(data);
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div className="app">
      <h1 className="title">Github User Search</h1>
      <SearchBar
        username={username}
        setUsername={setUsername}
        fetchUserData={fetchUserData}
      />
      {error && <p className="error">{error}</p>}
      {userData && <UserInfo userData={userData} />}
    </div>
  );
}

export default App;
