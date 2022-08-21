import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const SuccessPage = () => {
  const history = useHistory();

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      history.push("/");
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("user");
    history.push("/");
  }

  return (
    <div className="m-auto text-center">
      <i class="fa-solid fa-circle-check fa-10x text-success mb-3"></i>
      <h2 className="mb-3">Login Berhasil</h2>
      <button className="btn btn-xs btn-danger mb-2" onClick={handleLogout}>LOGOUT</button>
    </div>
  );
};

export default SuccessPage;
