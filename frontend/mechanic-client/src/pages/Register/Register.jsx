import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../pages/Redux/Slices/authSlice";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Register = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error } = useSelector((state) => state.auth);

  const [role, setRole] = useState("customer");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  useEffect(() => {
    const r = searchParams.get("role");
    if (r) setRole(r);
  }, [searchParams]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      registerUser({
        ...form,
        role,
      })
    ).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        navigate(`/login?role=${role}`);
      }
    });
  };

  return (
   
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light">
  <div className="row w-100 justify-content-center">
    <div className="col-md-6 col-lg-5">
      <div className="card shadow-lg border-0 rounded-4">

       
        <div className="card-header bg-dark text-warning text-center rounded-top-4">
          <h4 className="mb-0 fw-bold">
            {role === "provider"
              ? "Mechanic Registration"
              : "Customer Registration"}
          </h4>
          <small>
            {role === "provider"
              ? "Join our mechanic network"
              : "Find trusted mechanics near you"}
          </small>
        </div>

       
        <div className="card-body p-4">
          {error && <div className="alert alert-danger">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fw-semibold">Full Name</label>
              <input
                className="form-control"
                name="name"
                placeholder="Enter full name"
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Enter email"
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Phone</label>
              <input
                className="form-control"
                name="phone"
                placeholder="Enter phone number"
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Create password"
                onChange={handleChange}
                required
              />
            </div>

       
            {role === "provider" && (
              <>
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Experience (years)
                  </label>
                  <input
                    className="form-control"
                    name="experience"
                    placeholder="e.g. 5"
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Specialization
                  </label>
                  <input
                    className="form-control"
                    name="specialization"
                    placeholder="Bike, Car, Diesel, etc."
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Workshop Address
                  </label>
                  <input
                    className="form-control"
                    name=" workshopAddress"
                    placeholder="Enter your address"
                    onChange={handleChange}
                  />
                </div>
                

              </>
            )}

            <button
              className="btn btn-warning w-100 fw-bold"
              disabled={loading}
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </form>

          <hr />

          <p className="text-center mb-0">
            Already have an account?{" "}
            <Link
              to={`/login?role=${role}`}
              className="fw-bold text-dark text-decoration-none"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default Register;
