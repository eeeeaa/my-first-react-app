import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "../styles/example.css";

/* Note: <> ... </> (React Fragment) is when you dont want multiple elements to have container */
export function ExampleContent() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Hello, World!</h1>
    </>
  );
}
