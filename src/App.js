import { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  async function fetchData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsers(data);
  }
  useEffect(() => {
    fetchData();
  }, []);

  function handleChange(event) {
    setSearchQuery(event.target.value);
  }

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      <input
        type="text"
        value={searchQuery}
        onChange={handleChange}
        autoFocus
      />

      {filteredUsers.map((user) => (
        <div key={user.id} className="disDataDom">
          <div>{user.name}</div>
        </div>
      ))}
    </div>
  );
}

export default App;
