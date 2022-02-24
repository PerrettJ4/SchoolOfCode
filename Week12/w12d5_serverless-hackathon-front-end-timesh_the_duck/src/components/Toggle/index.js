import "./index.css";
import { useThemeContext } from "../../themeContext";
export default function Toggle({ toggleTheme }) {
  const [LSDtheme] = useThemeContext();
  const text = LSDtheme ? "textlsd" : "text";
  return (
    <>
      <div className="flex justify-center ">
        <label
          for="toogleButton"
          className={`flex items-center cursor-pointer text-${text}`}
        >
          <div className="px-2">LSD mode</div>

          <div className="relative">
            <input
              id="toogleButton"
              type="checkbox"
              className="hidden"
              onClick={() => {
                toggleTheme();
              }}
            />

            <div className="toggle-path bg-gray-200 w-9 h-5 rounded-full shadow-inner"></div>

            <div className="toggle-circle absolute w-3.5 h-3.5 bg-white rounded-full shadow inset-y-0 left-0"></div>
          </div>
        </label>
      </div>
    </>
  );
}
