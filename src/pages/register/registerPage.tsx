import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/store/hooks";
import { registerUser } from "@/store/reducers/auth";
import { LoaderCircle } from "lucide-react";

const RegisterPage = () => {
  const nameRef:any = useRef<HTMLInputElement>(null);
  const emailRef:any = useRef<HTMLInputElement>(null);
  const passwordRef:any = useRef<HTMLInputElement>(null);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleRegisterSubmit = () => {
    setLoading(true);
    const data = {
      name: nameRef?.current?.value || '',
      email: emailRef?.current?.value || '',
      password: passwordRef?.current?.value || '',
      favorite: []
    };
    dispatch(registerUser(data));
    setLoading(false);
    navigate('/auth/login')
  };
  
  return (
    <section className="flex justify-center items-center h-screen">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-xl">Sign Up</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="first-name">Name</Label>
              <Input
                ref={nameRef}
                id="first-name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                ref={emailRef}
                id="email"
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                ref={passwordRef}
                id="password"
                type="password"
                placeholder="Enter your password"
              />
            </div>
            <Button
              onClick={handleRegisterSubmit}
              type="submit"
              className="w-full flex flex-row gap-2"
            >
              {loading && <LoaderCircle className="animate-spin" />}
              <span>Create an account</span>
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link to={"/auth/login"} className="underline">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default RegisterPage;
