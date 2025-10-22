"use client";
import { useState } from "react";
import SignStep1 from "../_components/SignStep1";
import SignStep2 from "../_components/SignStep2";

export default function Sign() {
  const [step, setStep] = useState<number>(1);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div>
      {step === 1 && <SignStep1 onNext={nextStep} />}
      {step === 2 && <SignStep2 onBack={prevStep} />}
    </div>
  );
}
