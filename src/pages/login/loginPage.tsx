/** @format */

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LoaderCircle } from "lucide-react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { loginUser } from "../../store/reducers/auth";
import toast from "react-hot-toast";

const LoginPage = () => {

  const emailRef:any = useRef<HTMLInputElement>(null);
  const passwordRef:any = useRef<HTMLInputElement>(null);

  const [loading, setLoading] = useState(false);

  const dispatch = useAppDispatch();
  const user = useAppSelector((state)=> state.auth.user || [])

  const handleLoginSubmit = () => {
      setLoading(true)
      const email = emailRef?.current?.value;
      const password = passwordRef?.current?.value;
      const userInfo = user?.find((item:any) => item?.email === email && item.password === password)
      if(userInfo){
        dispatch(loginUser({email:email,password:password}))
        toast.success('Successfully Login :)')     
      }
      else {
        toast.error('User Not Found :(')     
      }
      setLoading(false)
  }

  return (
    <section className="flex justify-center items-center h-screen">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account. <br />
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
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
            <Input ref={passwordRef} id="password" type="password" placeholder="Enter your password" required />
          </div>
        </CardContent>
        <CardFooter>
          <div className="w-full">
            <Button
              onClick={handleLoginSubmit}
              className="w-full flex flex-row gap-2"
              disabled={loading || false}
            >
              {loading && <LoaderCircle className="animate-spin" />}

              <span>Sign in</span>
            </Button>

            <div className="mt-4 text-center text-sm">
              Don't have an account?{" "}
              <Link to={"/auth/register"} className="underline">
                Sign up
              </Link>
            </div>
          </div>
        </CardFooter>
      </Card>
    </section>
  );
};

export default LoginPage;
