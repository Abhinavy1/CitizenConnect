import AuthLayout from "../../../layouts/AuthLayout";
import AuthCard from "../components/AuthCard";
import LoginForm from "../components/LoginForm";

export default function Login() {
  return (
    <AuthLayout>

      <AuthCard
        title="Welcome Back 👋"
        subtitle="Sign in to continue managing complaints with CitizenConnect."
      >

        <LoginForm />

      </AuthCard>

    </AuthLayout>
  );
}