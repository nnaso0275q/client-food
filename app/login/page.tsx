"use client";
import { useState } from "react";
import LoginStep1 from "../_components/LoginStep1";
import LoginStep2 from "../_components/LoginStep2";

export default function Login() {
  const [step, setStep] = useState<number>(1);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div>
      {step === 1 && <LoginStep1 onNext={nextStep} />}
      {step === 2 && <LoginStep2 onBack={prevStep} />}
    </div>
  );
}
