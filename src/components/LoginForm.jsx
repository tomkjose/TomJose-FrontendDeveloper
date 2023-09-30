import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setLocalStorge } from "../utils/helpper";
import { useAuth } from "../provider/AuthProvider";
export function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { user, login } = useAuth();
  const navigate = useNavigate();

  if (user) {
    navigate("/home");
  }
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
      const response = await login(formData.email, formData.password);
      if (response) {
        setLocalStorge(response);
        navigate("/home");
      }
    } catch (error) {
      console.log("error", error);
      navigate("/signin");
    }
  };

  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Sign In
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Enter your details to Login.
      </Typography>
      <form
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        method="post"
        onSubmit={handleSubmit}
      >
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" label="Email" name="email" onChange={handleChange} />
          <Input
            type="password"
            size="lg"
            label="Password"
            name="password"
            onChange={handleChange}
          />
        </div>
        <Button className="mt-6" fullWidth type="submit">
          Login
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Create new Account?{" "}
          <Link to="/signup" className="font-medium text-gray-900">
            Sign Up
          </Link>
        </Typography>
      </form>
    </Card>
  );
}
