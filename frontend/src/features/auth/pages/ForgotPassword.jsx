import AuthLayout from "../../../layouts/AuthLayout";
import AuthCard from "../components/AuthCard";
import ForgotPasswordForm from "../components/ForgotPasswordForm";

export default function ForgotPassword() {
  return (
    <AuthLayout>
      <AuthCard
        title="Forgot Password?"
        subtitle="Enter your registered email address and we'll send you a password reset link."
      >
        <ForgotPasswordForm />
      </AuthCard>
    </AuthLayout>
  );
}