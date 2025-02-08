// import ressetlogo from "../assets/ressetlogo.png";
// import "./loginpage.css";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// function Login() {
//   const navigate = useNavigate();
//   const [mobile, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       // const response = await axios.post(
//         // "http://your-server-url.com",
//         // "https://dresetdelivery.onrender.com/v1/admin/login/",
//         // {
//         //   mobile,
//         //   password,
//         // },
//         // { withCredentials: true } // Ensures cookies (if any) are sent
//       // );

//       // if (response.data.success) {
//         localStorage.setItem("token", response.data.token); // Store JWT token
//         navigate("/radha/assignorders"); // Redirect after successful login
//       // } else {
//         // setError(response.data.message || "Invalid credentials");
//       // }
//     } catch (err) {
//       setError("Login failed. Please check your credentials.");
//     }
//   };

//   return (
//     <>
//       <form onSubmit={handleLogin}>
//         <div
//           className="logo mt-5"
//           style={{ display: "flex", justifyContent: "center", alignContent: "center" }}
//         >
//           <img src={ressetlogo} className="logoo" style={{ width: "40%" }} alt="Logo" />
//         </div>

//         <div style={{ padding: "4rem" }}>
//           <label htmlFor="" className="form-label label">
//             Enter your I.D
//           </label>
//           <div className="mb-3">
//             <input
//               // type="email"
//               required
//               className="form-control textoutline"
//               id="mobile"
//               placeholder="Admin@7777"
//               value={mobile}
              // onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>

//           <label htmlFor="password" className="form-label label mt-5">
//             Enter your Password
//           </label>
//           <div className="mb-3">
//             <input
//               type="password"
//               required
//               className="form-control textoutline"
//               id="password"
//               placeholder="********"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>

//           {error && <p style={{ color: "red" }}>{error}</p>}

//           <div className="d-grid mt-5 gap-2 col-6 mx-auto">
//             <button className="btn" style={{ backgroundColor: "orange" }} type="submit">
//               Login
//             </button>
//           </div>
//         </div>
//       </form>
//     </>
//   );
// }

// export default Login;




import ressetlogo from "../assets/ressetlogo.png";
import "./loginpage.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    
    // Instead of checking credentials, we directly navigate
    try {
      navigate("/radha/assignorders"); // Redirect immediately after form submission
    } catch (err) {
      setError("Login failed. Please try again.");
    }
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <div
          className="logo mt-5"
          style={{ display: "flex", justifyContent: "center", alignContent: "center" }}
        >
          <img src={ressetlogo} className="logoo" style={{ width: "40%" }} alt="Logo" />
        </div>

        <div style={{ padding: "4rem" }}>
          <label htmlFor="" className="form-label label">
            Enter your I.D
          </label>

          <input
              type="email"
              // required
              className="form-control textoutline"
              id="mobile"
              placeholder="Admin@7777"
              // value={mobile}
              // onChange={(e) => setEmail(e.target.value)}
            />

          <label htmlFor="password" className="form-label label mt-5">
            Enter your Password
          </label>
          <input
              type="email"
              // required
              className="form-control textoutline"
              id="mobile"
              placeholder="Admin@7777"
              // value={mobile}
              // onChange={(e) => setEmail(e.target.value)}
            />          
          {error && <p style={{ color: "red" }}>{error}</p>}

          <div className="d-grid mt-5 gap-2 col-6 mx-auto">
            <button className="btn" style={{ backgroundColor: "orange" }} type="submit">
              Login
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Login;
