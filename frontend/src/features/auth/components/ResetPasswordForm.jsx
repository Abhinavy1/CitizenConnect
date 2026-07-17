import { useState } from "react";
import { Lock } from "lucide-react";
import { Link } from "react-router-dom";

import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";

export default function ResetPasswordForm() {
  const [form, setForm] = useState({
    password: "",
    confirmPassword: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log(form);

    // Backend Integration Later
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <Input
        label="New Password"
        type="password"
        name="password"
        placeholder="Enter new password"
        value={form.password}
        onChange={handleChange}
        leftIcon={<Lock size={20} />}
      />

      <Input
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        placeholder="Confirm new password"
        value={form.confirmPassword}
        onChange={handleChange}
        leftIcon={<Lock size={20} />}
      />

      <Button
        type="submit"
        fullWidth
      >
        Reset Password
      </Button>

      <p className="text-center text-slate-400">
        Back to{" "}
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