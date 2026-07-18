import { useState } from "react";
import { User, Mail, Lock, Phone } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";
import SocialLogin from "./SocialLogin";

import { registerUser } from "../../../services/authService";

export default function RegisterForm() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  function handleChange(e) {
    const { name, value, checked, type } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!form.firstName.trim()) {
      return toast.error("First Name is required");
    }

    if (!form.lastName.trim()) {
      return toast.error("Last Name is required");
    }

    if (!form.phone.trim()) {
      return toast.error("Phone Number is required");
    }

    if (!form.email.trim()) {
      return toast.error("Email is required");
    }

    if (!form.password.trim()) {
      return toast.error("Password is required");
    }

    if (form.password !== form.confirmPassword) {
      return toast.error("Passwords do not match");
    }

    if (!form.agree) {
      return toast.error("Please accept Terms & Conditions");
    }

    try {
      setLoading(true);

      const response = await registerUser({
        firstName: form.firstName,
        lastName: form.lastName,
        phone: form.phone,
        email: form.email,
        password: form.password,
      });

      toast.success(response.data.message);

      navigate("/login");

    } catch (error) {
      console.error(error);

      toast.error(
        error?.response?.data?.message ||
          "Registration Failed"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <Input
        label="First Name"
        name="firstName"
        value={form.firstName}
        onChange={handleChange}
        placeholder="Abhinav"
        leftIcon={<User size={18} />}
      />

      <Input
        label="Last Name"
        name="lastName"
        value={form.lastName}
        onChange={handleChange}
        placeholder="Kumar"
        leftIcon={<User size={18} />}
      />

      <Input
        label="Phone Number"
        name="phone"
        value={form.phone}
        onChange={handleChange}
        placeholder="9876543210"
        leftIcon={<Phone size={18} />}
      />

      <Input
        label="Email Address"
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="abc@gmail.com"
        leftIcon={<Mail size={18} />}
      />

      <Input
        label="Password"
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        placeholder="Create Password"
        leftIcon={<Lock size={18} />}
      />

      <Input
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        value={form.confirmPassword}
        onChange={handleChange}
        placeholder="Confirm Password"
        leftIcon={<Lock size={18} />}
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
          <span className="text-cyan-400">
            Terms of Service
          </span>{" "}
          and{" "}
          <span className="text-cyan-400">
            Privacy Policy
          </span>
        </span>
      </label>

      <Button
        type="submit"
        fullWidth
        disabled={loading}
      >
        {loading ? "Creating Account..." : "Create Account"}
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
          className="font-semibold text-cyan-400"
        >
          Login
        </Link>
      </p>
    </form>
  );
}