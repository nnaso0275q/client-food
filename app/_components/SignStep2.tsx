"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
export default function SignStep2({ onBack }: { onBack: () => void }) {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!password || !confirm) {
      setError("Password bolon Confirm hoyroo buglunu uu!!!");
      return;
    }

    if (password.length < 3) {
      setError("Nuuts ug 3aas deesh temdegt ashigla");
      return;
    }
    if (password !== confirm) {
      setError("Nuuts ug taarahgui baina");
    } else {
      setError("");
      alert("Amjilttai burtgegdlee");
    }
  };

  return (
    <div className="w-full h-full bg-white">
      <div className=" flex gap-[48px] items-center mr-[20px] ml-[100px] min-h-screen">
        <div className="w-[416px] h-fit grid gap-y-6 inter ">
          <Button
            className="w-[36px] h-[36px] border-gray-300 rounded-[6px] bg-white border hover:bg-gray-300"
            onClick={onBack}
          >
            <img className="w-[16px] h-[16px]" src="/Vector.svg" />
          </Button>

          <div className="grid gap-y-[4px]">
            <div className=" font-semibold text-2xl ">
              Create a strong password
            </div>
            <div className="text-muted-foreground  text-base font normal">
              Sign up to explore your favorite dishes.
            </div>
          </div>

          <Input
            type="password"
            className="w-full"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="confirm"
            className="w-full"
            placeholder="Confirm"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />
          <Button onClick={handleSubmit} className="w-full">
            Let's Go
          </Button>
          <div className="text-muted-foreground w-full mx-[80px]">
            Already have an account?
            <span className="text-blue-500"> Log in</span>
          </div>
        </div>
        <img className="rounded-[16px]" src="picture.svg" />
      </div>
    </div>
  );
}
