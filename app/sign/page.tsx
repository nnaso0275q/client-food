import { Button } from "@/components/ui/button";

export default function sign() {
  return (
    //Step-1 Email
    <div className="w-full h-full bg-white">
      <div className="flex">
        <div>
          <Button className="w-9 h-9">
            <img src="/Vector.svg"></img>
          </Button>
        </div>
        <img src="picture.svg" />
      </div>
    </div>
  );
}
