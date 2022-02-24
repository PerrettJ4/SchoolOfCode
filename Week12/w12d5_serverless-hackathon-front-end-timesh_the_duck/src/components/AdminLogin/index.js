import React, { useState } from "react";
import Input from "../Input";
import { useThemeContext } from "../../themeContext";

const AdminLogin = ({ refresh, setRefresh }) => {
  const [pass, setPass] = useState("");
  const [logged, setLog] = useState(false);
  const [wrongPass, setWrongPass] = useState(false);
  const [LSDtheme] = useThemeContext();
  const text = LSDtheme ? "textlsd" : "text";

  return (
    <div className="flex flex-col items-center justify-right">
      {!logged && (
        <div>
          <h3 className={`text-${text}`}>Login</h3>
          {wrongPass && <h4>Wrong password!</h4>}
          <input
            type="password"
            placeholder="Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <button
            onClick={() => {
              if (pass === "admin") {
                setLog(true);
                setWrongPass(true);
              } else setWrongPass(true);
            }}
          >
            Login
          </button>
        </div>
      )}
      {logged && (
        <div>
          <h3 className={`text-${text}`}>Add new item to shelf</h3>
          <Input refresh={refresh} setRefresh={setRefresh} />
          <button
            onClick={() => {
              setLog(false);
              setPass("");
            }}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminLogin;
