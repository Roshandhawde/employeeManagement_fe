import { useState } from "react";
import api from "../Api/axios";
import { useNavigate } from "react-router-dom";
import './login.css'
export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", {
        username:name,
        password:password
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("username", res.data.name);

      navigate("/home");
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
   <div className="login-container">
  <div className="login-card">
    <h2>Employee Login</h2>

    <form onSubmit={handleLogin}>
      <input
        type="text"
        placeholder="Username"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button type="submit">Login</button>
    </form>
  </div>
</div>

  );
}
