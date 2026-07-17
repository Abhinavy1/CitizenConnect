import { useState } from "react";
import { Mail, Lock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";
import SocialLogin from "./SocialLogin";

import { useAuth } from "../../../context/AuthContext";

export default function LoginForm() {

  const navigate = useNavigate();

  const { login, loading } = useAuth();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  async function handleSubmit(e) {

    e.preventDefault();

    const success = await login({
      email,
      password,
    });

    if (success) {

      navigate("/dashboard");

    }

  }

  return (

    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >

      <Input
        label="Email Address"
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        leftIcon={<Mail size={20}/>}
      />

      <Input
        label="Password"
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        leftIcon={<Lock size={20}/>}
      />

      <div className="flex items-center justify-between">

        <label className="flex items-center gap-2 text-slate-400">

          <input type="checkbox"/>

          Remember Me

        </label>

        <Link
          to="/forgot-password"
          className="text-cyan-400"
        >

          Forgot Password?

        </Link>

      </div>

      <Button
        type="submit"
        fullWidth
        disabled={loading}
      >

        {loading ? "Signing In..." : "Login"}

      </Button>

      <div className="relative">

        <div className="absolute inset-0 flex items-center">

          <div className="w-full border-t border-white/10"/>

        </div>

        <div className="relative flex justify-center">

          <span className="bg-slate-900 px-4 text-slate-500">

            OR

          </span>

        </div>

      </div>

      <SocialLogin/>

      <p className="text-center text-slate-400">

        Don't have an account?{" "}

        <Link
          to="/register"
          className="font-semibold text-cyan-400"
        >

          Register

        </Link>

      </p>

    </form>

  );

}