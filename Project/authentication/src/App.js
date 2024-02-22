import React from "react";
import AuthComponent from "./component/AuthComponent";
import { AuthProvider } from "./component/AuthContext";

function App() {
  return (
    <AuthProvider>
        <div className="container">
          <h1>Authentication Example</h1>
          <AuthComponent />
        </div>
    </AuthProvider>
  );
}

export default App;
