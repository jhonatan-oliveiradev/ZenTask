import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full border-t px-4">
      <div className="mx-auto flex w-full items-center justify-between md:max-w-screen-2xl">
        <Logo />
        <div className="items=center flex w-full justify-between space-x-4 md:block md:w-auto">
          <Button size="sm" variant="ghost">
            <Link href="/sign-in">Privacy Policy</Link>
          </Button>
          <Button size="sm" variant="ghost">
            <Link href="/sign-up">Terms of Service</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
