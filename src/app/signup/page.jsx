"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Separator,
  TextField,
} from "@heroui/react";
import { redirect } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const onSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const user = Object.fromEntries(formData.entries());
  console.log(user);

  const { data, error } = await authClient.signUp.email({
    email: user.email,
    password: user.password,
    name: user.name,
    image: user.photo,
  });
  // console.log(data, error);
  if (data) {
    toast.success("Sign Up Successfully");
    redirect("/");
  }
  if (error) {
    toast.error(`Sign Up Failed. ${error.message}`);
  }
};

const handleGoogle = async () => {
  const data = await authClient.signIn.social({
    provider: "google",
  });
};

const SignUpPage = () => {
  return (
    <div className="max-w-6xl mx-auto my-12 ">
      <div>
        <h1 className="text-2xl font-bold  text-center">Create Your Account</h1>
        <p className="text-sm text-center">
          Start your adventure with Wanderlust
        </p>
      </div>
      <Card className="text shadow-lg rounded-none">
        {" "}
        <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
          <TextField isRequired name="name" type="text">
            <Label>Name</Label>
            <Input placeholder="Enter Your Name" />
            <FieldError />
          </TextField>
          <TextField isRequired name="photo" type="url">
            <Label>Image URL</Label>
            <Input placeholder="Image url" />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>
          <div className="flex justify-center ">
            <Button type="submit" className={"bg-cyan-500 w-full rounded-none"}>
              <Check />
              Create Account
            </Button>
          </div>
        </Form>
        <div>
          <Separator></Separator>
          <div className="text-sm text-center py-2">Or sign up with</div>
          <Separator></Separator>
          <div className="text-center pt-3">
            <Button variant="outline" onClick={handleGoogle}>
              <FcGoogle />
              Sign Up with Google
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SignUpPage;
