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
import Sidebar from "./pages/admin/Sidebar";
import Dashboard from "./pages/admin/Dashboard";
import CourseTable from "./pages/admin/course/CourseTable";
import AddCourse from "./pages/admin/course/addCourse";

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

      // admin routes
      {
        path: "admin",
        element:<Sidebar/>,
        children: [
          {
            path: "dashboard",
            element: <Dashboard/>
          },
          {
            path: "course",
            element: <CourseTable/>
          },
          {
            path: "course/create",
            element: <AddCourse/>
          }
        ]
      }
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
