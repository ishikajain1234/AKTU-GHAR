import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import {Menu, School} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Avatar, AvatarFallback, AvatarImage} from "@radix-ui/react-avatar";
import DarkMode from "@/DarkMode";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "./ui/sheet";
import {Link} from "react-router-dom";

const Navbar = () => {
  const user = true;

  return (
    <div className="h-16 dark:bg-[#0A0A0A] bg-white border-b dark:border-b-gray-800 border-b-gray-200 fixed top-0 left-0 right-0 shadow-lg z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 h-full">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <School size={30} className="text-blue-600 dark:text-blue-400" />
          <h1 className="font-extrabold text-2xl text-gray-800 dark:text-white">
            E-Learning
          </h1>
        </div>

        {/* User Dropdown or Auth Buttons */}
        <div className="hidden md:flex items-center gap-8">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                {/* Avatar as the User Menu Trigger */}
                {/* <Avatar className="w-8 h-8 cursor-pointer border-2 border-gray-300 dark:border-gray-700 rounded-full">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="User Avatar"
                  />
                  <AvatarFallback className="text-white bg-gray-400">
                    U
                  </AvatarFallback>
                </Avatar> */}
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                    className="rounded-full"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>

              {/* User Dropdown Menu Content */}
              <DropdownMenuContent className="w-64 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-300 rounded-lg shadow-xl border dark:border-gray-700 mt-2">
                <div className="p-4 flex items-center gap-4">
                  {/* <Avatar className="w-10 h-10 cursor-pointer border-2 border-gray-300 dark:border-gray-700 rounded-full">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="User Avatar"
                    />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar> */}
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                      className="rounded-full"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem className="hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md px-4 py-2">
                    <Link to="/my-learning">My Learning</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md px-4 py-2">
                    <Link to="/Profile">Edit Profile</Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md px-4 py-2">
                  Log out
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md px-4 py-2">
                  Dashboard
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                className="text-sm rounded-lg px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Login
              </Button>
              <Button className="text-sm rounded-lg px-4 py-2 bg-blue-600 text-white hover:bg-blue-500">
                Signup
              </Button>
            </div>
          )}
          <DarkMode />
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex md:hidden">
          <MobileSidebar />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

const MobileSidebar = () => {
  const role = "instructor";
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="text-sm rounded-lg px-5 py-2">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-3/4 sm:w-1/2">
        <SheetHeader>
          <SheetTitle>E-Learning</SheetTitle>
          <SheetDescription>Explore the app features</SheetDescription>
          <DarkMode />
        </SheetHeader>

        <div className="grid gap-4 py-4">
          <Button variant="ghost" className="w-full">
            My Learning
          </Button>
          <Button variant="ghost" className="w-full">
            Edit Profile
          </Button>
          <Button variant="ghost" className="w-full">
            Dashboard
          </Button>
          <Button variant="ghost" className="w-full">
            Log out
          </Button>
        </div>
        {role === "instructor" && (
          <SheetFooter>
            <SheetClose asChild>
              <Button variant="outline" className="w-full">
                Dashboard
              </Button>
            </SheetClose>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
};
