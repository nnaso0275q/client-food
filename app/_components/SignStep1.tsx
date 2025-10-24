"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function SignStep1({
  onNext,
  email,
  setEmail,
}: {
  onNext: () => void;
  email: string;
  setEmail: (v: string) => void;
}) {
  const handleSubmit = () => {
    if (!email.includes("@")) {
      alert("Email buruu baina!");
      return setEmail;
    }
    onNext();
  };

  return (
    <div className="w-full h-full bg-white">
      <div className=" flex gap-[48px] items-center mr-[20px] ml-[100px] min-h-screen">
        <div className="w-[416px] h-fit grid gap-y-6 inter ">
          <Link href="/">
            <Button className="w-[36px] h-[36px] border-gray-300 rounded-[6px] bg-white border hover:bg-gray-300">
              <img className="w-[16px] h-[16px]" src="/Vector.svg" />
            </Button>
          </Link>
          <div className="grid gap-y-[4px]">
            <div className=" font-semibold text-2xl ">Create your account</div>
            <div className="text-muted-foreground  text-base font normal">
              Sign up to explore your favorite dishes.
            </div>
          </div>

          <Input
            type="email"
            className="w-full"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Input>

          <Button onClick={handleSubmit} className="w-full">
            Let's Go
          </Button>

          <div className="text-muted-foreground w-full mx-[80px] gap-2">
            Already have an account?
            <button className="text-blue-500 hover:underline">
              <Link href="/login"> Log in</Link>
            </button>
          </div>
        </div>
        <img className="rounded-[16px]" src="picture.svg" />
      </div>
    </div>
  );
}
