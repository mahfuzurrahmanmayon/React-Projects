import React, { useState } from "react";
import { Link } from "react-router-dom";
import firebaseConfig from "../firebase";
import { getAuth, signInWithEmailAndPassword , onAuthStateChanged} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const handleSubmit = () => {
    if (!email && !password) {
      setErr("Please Fill The All Details");
    } else if (!email) {
      setErr("Please enter your email!");
    } else if (!password) {
      setErr("Please enter your password!");
    } else if (password.length <= 8) {
      setErr("Password length minimum 8 chars!");
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setErr("")
          navigate("/")
        })
        .catch((error) => {
          console.log(error.code)
          if(error.code === "auth/invalid-credential"){
            setErr("Email or Password doesn't match")
          }else{
            setErr("")
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
        <h2>Login a account!</h2>
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
        <button onClick={handleSubmit}>SignIn</button>
        <Link to="/signup">You don't have account? SignUp</Link>
      </div>
    </div>
  );
};

export default SignIn;
