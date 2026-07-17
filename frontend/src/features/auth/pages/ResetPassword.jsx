import AuthLayout from "../../../layouts/AuthLayout";
import AuthCard from "../components/AuthCard";
import ResetPasswordForm from "../components/ResetPasswordForm";

export default function ResetPassword() {
  return (
    <AuthLayout>
      <AuthCard
        title="Create New Password 🔐"
        subtitle="Choose a strong password to secure your CitizenConnect account."
      >
        <ResetPasswordForm />
      </AuthCard>
    </AuthLayout>
  );
}