import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import axiosInstance from "../utils/axios";

const LoginPage = () => {
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      history.push("/success");
    }
  }, [])

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const username = e.target.username.value;
      const password = e.target.password.value;
      if (!username || !password) {
        return alert("Username dan password tidak boleh kosong");
      }
      const response = await axiosInstance.get(`/users?username=${username}&password=${password}`);
      if (response.length) {
        localStorage.setItem("user", JSON.stringify(response[0]));
        history.push("/success");
      } else {
        alert("Username atau password salah");
      }
    } catch (error) {
      console.error(error);
    }
  }

  const handleForgotPassword = () => {
    alert('Informasi password telah dikirim ke email anda');
  }

  return (
    <div className="form-signin m-auto" style={{ width: "500px" }}>
      <form onSubmit={onSubmit}>
        <h3 className="text-center mb-4">Login</h3>
        <div className="mb-3">
          <label for="username" className="mb-1">
            <i className="fa-solid fa-user" /> Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Ketikan username anda"
          />
        </div>
        <div className="mb-3">
          <label for="password" className="mb-1">
            <i className="fa-solid fa-gear" /> Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Ketikan password anda"
          />
        </div>
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-success mb-2" type='submit'>
          LOGIN ADMIN
        </button>
        <button className="w-100 btn btn-lg btn-info text-light mb-2" onClick={() => history.push('/register')}>
          Register Mahasiswa Baru
        </button>
        <div className="text-center">
          <a href="#" className="text-decoration-none" onClick={handleForgotPassword}>
            <i className="fa-solid fa-eye" /> Lupa Password ?
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;