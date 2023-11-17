"use client";

import { UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const ProtectedPage = () => {
  return (
    <div>
      <UserButton
        appearance={{
          baseTheme: dark,
        }}
        afterSignOutUrl="/"
      />
    </div>
  );
};

export default ProtectedPage;
