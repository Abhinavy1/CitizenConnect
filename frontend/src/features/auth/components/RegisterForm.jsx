import { useState } from "react";
import { User, Mail, Lock } from "lucide-react";
import { Link } from "react-router-dom";

import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";
import SocialLogin from "./SocialLogin";

export default function RegisterForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(form);

    // Backend Integration Later
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <Input
        label="Full Name"
        name="name"
        placeholder="John Doe"
        value={form.name}
        onChange={handleChange}
        leftIcon={<User size={20} />}
      />

      <Input
        label="Email Address"
        type="email"
        name="email"
        placeholder="john@example.com"
        value={form.email}
        onChange={handleChange}
        leftIcon={<Mail size={20} />}
      />

      <Input
        label="Password"
        type="password"
        name="password"
        placeholder="Create Password"
        value={form.password}
        onChange={handleChange}
        leftIcon={<Lock size={20} />}
      />

      <Input
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={form.confirmPassword}
        onChange={handleChange}
        leftIcon={<Lock size={20} />}
      />

      <label className="flex items-start gap-3 text-slate-400">
        <input
          type="checkbox"
          name="agree"
          checked={form.agree}
          onChange={handleChange}
          className="mt-1 accent-cyan-500"
        />

        <span>
          I agree to the{" "}
          <a
            href="#"
            className="text-cyan-400 hover:text-cyan-300"
          >
            Terms of Service
          </a>{" "}
          and{" "}
          <a
            href="#"
            className="text-cyan-400 hover:text-cyan-300"
          >
            Privacy Policy
          </a>
        </span>
      </label>

      <Button
        type="submit"
        fullWidth
      >
        Create Account
      </Button>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-white/10" />
        </div>

        <div className="relative flex justify-center">
          <span className="bg-slate-900 px-4 text-sm text-slate-500">
            OR
          </span>
        </div>
      </div>

      <SocialLogin />

      <p className="text-center text-slate-400">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-semibold text-cyan-400 hover:text-cyan-300"
        >
          Login
        </Link>
      </p>
    </form>
  );
}