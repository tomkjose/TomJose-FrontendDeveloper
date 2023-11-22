import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiSignUp } from "../api";
import { setLocalStorge } from "../utils/helpper";
import { useAuth } from "../provider/AuthProvider";

export function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await apiSignUp(
        formData.name,
        formData.email,
        formData.password
      );

      if (response) {
        setLocalStorge(response);
        navigate("/home");
      }
    } catch (error) {
      // console.log("error", error);
    }
  };

  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Enter your details to register.
      </Typography>
      <form
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        method="post"
        onSubmit={handleSubmit}
      >
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" label="Name" name="name" onChange={handleChange} />
          <Input size="lg" label="Email" name="email" onChange={handleChange} />
          <Input
            type="password"
            size="lg"
            label="Password"
            name="password"
            onChange={handleChange}
          />
        </div>

        <Button className="mt-6 hover:bg-blue-700" fullWidth type="submit">
          Register
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <Link to="/signin" className="font-medium text-gray-900">
            Sign In
          </Link>
        </Typography>
      </form>
    </Card>
  );
}
