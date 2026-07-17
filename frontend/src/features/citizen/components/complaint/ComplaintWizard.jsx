import { useState } from "react";

import StepIndicator from "./StepIndicator";
import CategoryStep from "./CategoryStep";
import UploadStep from "./UploadStep";
import DetailsStep from "./DetailsStep";
import LocationStep from "./LocationStep";
import AIReviewStep from "./AIReviewStep";
import SubmitStep from "./SubmitStep";

export default function ComplaintWizard() {
  const [currentStep, setCurrentStep] = useState(0);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    categoryGroup: "",
    category: "",

    images: [],

    title: "",
    description: "",

    state: "",
    city: "",
    pinCode: "",
    landmark: "",
    address: "",
    coordinates: "",
  });

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const submitComplaint = async () => {
    setLoading(true);

    // Backend API Integration
    // POST /api/complaints

    console.log(formData);

    await new Promise((resolve) =>
      setTimeout(resolve, 2000)
    );

    alert("Complaint Submitted Successfully!");

    setLoading(false);

    setCurrentStep(0);

    setFormData({
      categoryGroup: "",
      category: "",

      images: [],

      title: "",
      description: "",

      state: "",
      city: "",
      pinCode: "",
      landmark: "",
      address: "",
      coordinates: "",
    });
  };

  return (
    <div
      className="
        mx-auto
        max-w-7xl
        rounded-3xl
        border
        border-white/10
        bg-slate-950
        p-10
        shadow-2xl
      "
    >
      <StepIndicator
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />

      {currentStep === 0 && (
        <CategoryStep
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
        />
      )}

      {currentStep === 1 && (
        <UploadStep
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}

      {currentStep === 2 && (
        <DetailsStep
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
            {currentStep === 3 && (
        <LocationStep
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}

      {currentStep === 4 && (
        <AIReviewStep
          formData={formData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}

      {currentStep === 5 && (
        <SubmitStep
          formData={formData}
          prevStep={prevStep}
          submitComplaint={submitComplaint}
          loading={loading}
        />
      )}
    </div>
  );
}