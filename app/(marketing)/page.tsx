import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Medal } from "lucide-react";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import Link from "next/link";

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

const MarketingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className={cn(
          "flex flex-col items-center justify-center",
          headingFont.className,
        )}
      >
        <div className="mb-4 flex items-center rounded-full border bg-emerald-100 p-4 uppercase text-emerald-700">
          <Medal className="mr-2 h-6 w-6" />
          No 1 task management
        </div>
        <h1 className="mb-6 text-center text-3xl text-foreground md:text-6xl">
          ZenTask helps team move
        </h1>
        <div className="rounded-md bg-gradient-to-r from-fuchsia-600 to-pink-600 p-4 px-4 text-3xl text-zinc-50 shadow-sm md:text-6xl">
          work forward.
        </div>
      </div>
      <div
        className={cn(
          "mx-auto mt-4 max-w-xs text-center text-sm text-muted-foreground md:max-w-2xl md:text-xl",
          textFont.className,
        )}
      >
        Collaborate, manage projects, and reach new productivity peaks. From
        high rises to the home office, the way your team works is unique -
        accomplish all with ZenTask.
      </div>
      <Button className="mt-6" size="lg">
        <Link href="/sign-up">Get ZenTask for free</Link>
      </Button>
    </div>
  );
};

export default MarketingPage;
