import "./App.css";
import Navbar from "./components/navbar";
import {Button} from "./components/ui/button";
import MainLayout from "./layout/MainLayout";
import Login from "./pages/login";
import Courses from "./pages/student/Courses";
import Profile from "./pages/student/Profile";
import HeroSection from "./pages/student/HeroSection";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MyLearning from "./pages/student/MyLearning";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <HeroSection />
            <Courses />
          </>
        ),
      },

      {
        path: "login",
        element: <Login />,
      },
      {
        path: "my-learning",
        element: <MyLearning />,
      },
      {
        path: "profile",
        element: <Profile/>,
      },
    ],
  },
]);

function App() {
  return (
    <main>
      <RouterProvider router={appRouter} />
    </main>
  );
}

export default App;
