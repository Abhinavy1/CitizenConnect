import { useState } from "react";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log(email);

    // Backend Integration Later
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <Input
        label="Email Address"
        type="email"
        name="email"
        placeholder="Enter your registered email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        leftIcon={<Mail size={20} />}
      />

      <Button
        type="submit"
        fullWidth
      >
        Send Reset Link
      </Button>

      <p className="text-center text-slate-400">
        Remember your password?{" "}
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