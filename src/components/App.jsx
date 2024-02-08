import { NavBar } from "./navigationBar.jsx";
import { useState } from "react";
import { Bio } from "./bio.jsx";
import { ExampleContent } from "./example.jsx";
import { Person } from "./person.jsx";
import ErrorPage from "./ErrorPage.jsx";
import ChatRoomPage from "./mockChatRoom.jsx";
import ClassInput from "./legacyExample.jsx";
import "../styles/App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, //make this render by default
        element: <Bio />,
      },
      {
        path: "example",
        element: <ExampleContent />,
      },
      {
        path: "person",
        element: <Person />,
      },
      {
        path: "chatroom",
        element: <ChatRoomPage />,
      },
      {
        path: "legacy-example",
        element: <ClassInput />,
      },
    ],
  },
]);

function Root() {
  const [backgroundColor, setBackgroundColor] = useState("#242424");

  const onColorChangeClick = (backgroundColor) => {
    setBackgroundColor(backgroundColor);
  };
  return (
    <div
      className="appLayout"
      style={{ backgroundColor }}
      data-testid="main-app-page"
    >
      <NavBar handleColorChangeClick={onColorChangeClick} />
      <div className="content">
        {/*Outlet is where the children will populate when routed*/}
        <Outlet />
      </div>
    </div>
  );
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
