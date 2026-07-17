import AuthLayout from "../../../layouts/AuthLayout";
import AuthCard from "../components/AuthCard";
import RegisterForm from "../components/RegisterForm";

export default function Register() {
  return (
    <AuthLayout>
      <AuthCard
        title="Create Account 🚀"
        subtitle="Join CitizenConnect and experience AI-powered governance."
      >
        <RegisterForm />
      </AuthCard>
    </AuthLayout>
  );
}