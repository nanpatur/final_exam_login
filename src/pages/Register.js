import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom"
import axiosInstance from "../utils/axios";

const RegisterPage = () => {
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      history.push("/success");
    }
  }, [])

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const payload = {
        name: e.target.name.value,
        username: e.target.username.value,
        password: e.target.password.value,
        email: e.target.email.value,
      }
      if (!payload.name || !payload.username || !payload.password || !payload.email) {
        return alert("Semua field harus diisi")
      }
      if (payload.password !== e.target.confirmPassword.value) {
        return alert("Password tidak sama")
      }
      await axiosInstance.post('/users', payload)
      history.push('/')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="form-register m-auto" style={{ width: "500px" }}>
      <form onSubmit={onSubmit}>
        <h3 className="text-center mb-4">Register</h3>
        <div className="mb-3">
          <label for="name" className="mb-1">
            <i className="fa-solid fa-user" /> Nama
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Ketikan nama anda"
          />
        </div>
        <div className="mb-3">
          <label for="username" className="mb-1">
          <i class="fa-solid fa-fingerprint" /> Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Ketikan username anda"
          />
        </div>
        <div className="mb-3">
          <label for="email" className="mb-1">
            <i class="fa-solid fa-envelope" /> Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Ketikan email anda"
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
        <div className="mb-3">
          <label for="confirmPassword" className="mb-1">
            <i className="fa-solid fa-gear" /> Konfirmasi Password
          </label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            placeholder="Ketikan ulang password anda"
          />
        </div>
        <button className="w-100 btn btn-lg btn-success mb-2" type='submit'>
          REGISTER
        </button>
        <div className="text-center">
          Sudah punya akun?&nbsp;
          <Link to="/" className="text-decoration-none">
            Login
          </Link>
        </div>
      </form>
    </div>
  )
}

export default RegisterPage