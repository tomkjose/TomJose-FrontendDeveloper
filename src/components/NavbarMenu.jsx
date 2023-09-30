import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";

export function NavbarMenu() {
  const [openNav, setOpenNav] = React.useState(false);

  const { user, logout } = useAuth();
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-xl px-4 py-2">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Link to="/">
          {" "}
          <Typography
            variant="h6"
            className="mr-4 cursor-pointer py-1.5 lg:ml-2"
          >
            SpaceX
          </Typography>
        </Link>

        {user ? (
          <div className="hidden gap-2 lg:flex">
            <Typography
              variant="h6"
              className="mr-4 cursor-pointer py-1.5 lg:ml-2"
            >
              {user}
            </Typography>
            <Button
              variant="gradient"
              size="sm"
              className="hover:bg-blue-700"
              onClick={logout}
            >
              Logout
            </Button>
          </div>
        ) : (
          <div className="hidden gap-2 lg:flex">
            <Link to="/signin">
              {" "}
              <Button variant="text" size="sm" color="blue-gray">
                Login
              </Button>
            </Link>
            <Link to="/signup">
              {" "}
              <Button
                variant="gradient"
                size="sm"
                className="hover:bg-blue-700"
              >
                Register
              </Button>
            </Link>
          </div>
        )}
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          {" "}
          <Button variant="outlined" size="sm" color="blue-gray" fullWidth>
            <Link to="/signin"> Login </Link>
          </Button>{" "}
          <Button variant="gradient" size="sm" fullWidth>
            <Link to="/signup"> Register </Link>
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}
