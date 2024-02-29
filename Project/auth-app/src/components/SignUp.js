import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const handleSubmit = () => {
    if (!name && !email && !password) {
      setErr("Please Fill The All Details");
    } else if (!name) {
      setErr("Please enter your name!");
    } else if (!email) {
      setErr("Please enter your email!");
    } else if (!password) {
      setErr("Please enter your password!");
    } else if (password.length <= 8) {
      setErr("Password length minimum 8 chars!");
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          updateProfile(auth.currentUser, {
            displayName: name,
            photoURL:
              "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png",
          }).then(() => {
            setErr("");
            navigate("/");
          });
        })
        .catch((error) => {
          console.log(error.code);
          if (error.code === "auth/email-already-in-use") {
            setErr("Email already in use!");
          } else {
            setErr("");
          }
        });
    }
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      navigate("/");
    }
  });

  return (
    <div id="signup">
      <div className="signup">
        <h2>Create a account!</h2>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
        <p>{err}</p>
        <button onClick={handleSubmit}>SignUp</button>
        <Link to="/signin">You have already account? SignIn</Link>
      </div>
    </div>
  );
};

export default SignUp;
