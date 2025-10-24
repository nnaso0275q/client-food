"use client";
import { useState } from "react";
import SignStep1 from "../_components/SignStep1";
import SignStep2 from "../_components/SignStep2";

export default function Sign() {
  const [step, setStep] = useState<number>(1);
  const [email, setEmail] = useState<string>("");

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div>
      {step === 1 && (
        <SignStep1 email={email} setEmail={setEmail} onNext={nextStep} />
      )}
      {step === 2 && <SignStep2 email={email} onBack={prevStep} />}
    </div>
  );
}
