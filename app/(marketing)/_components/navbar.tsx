import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";

export const Navbar = () => {
  return (
    <div className="fixed top-0 flex h-14 w-full items-center border-b px-4 shadow-sm">
      <div className="mx-auto flex w-full items-center justify-between md:max-w-screen-2xl">
        <Logo />
        <div className="flex w-full items-center justify-between space-x-4 md:w-auto">
          <Button size="sm" variant="outline" asChild>
            <Link href="/sign-in">Login</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/sign-up">Get ZenTask for free</Link>
          </Button>
          <Separator orientation="vertical" className="hidden h-6 md:flex" />
          <div className="hidden md:flex">
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};
