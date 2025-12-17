import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../Redux/Slices/authSlice";
import { useSearchParams, useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, role, isAuthenticated } =
    useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState("customer");

  useEffect(() => {
    const r = searchParams.get("role");
    if (r) setSelectedRole(r);
  }, [searchParams]);

  useEffect(() => {
    if (isAuthenticated) {
      if (role === "provider") {
        navigate("/provider/dashboard");
      } else {
        navigate("/customer/dashboard");
      }
    }
  }, [isAuthenticated, role, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password, role: selectedRole }));
  };

  return (
    
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light">
  <div className="row w-100 justify-content-center">
    <div className="col-md-5 col-lg-4">
      <div className="card shadow-lg border-0 rounded-4">
        
       
        <div className="card-header bg-dark text-warning text-center rounded-top-4">
          <h4 className="mb-0 fw-bold">
            {selectedRole === "provider" ? "Mechanic Login" : "Customer Login"}
          </h4>
          <small>
            {selectedRole === "provider"
              ? "Manage jobs & services"
              : "Book trusted mechanics"}
          </small>
        </div>

      
        <div className="card-body p-4">
          {error && <div className="alert alert-danger">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fw-semibold">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              className="btn btn-warning w-100 fw-bold"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <hr />

          <p className="text-center mb-0">
            Don’t have an account?{" "}
            <Link
              to={`/register?role=${selectedRole}`}
              className="text-decoration-none fw-bold text-dark"
            >
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default Login;
