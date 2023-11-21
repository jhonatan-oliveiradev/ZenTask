import { OrganizationProfile } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const SettingsPage = () => {
  return (
    <div className="w-full">
      <OrganizationProfile
        appearance={{
          baseTheme: dark,
          elements: {
            rootBox: {
              boxShadow: "none",
              width: "100%",
            },
          },
        }}
      />
    </div>
  );
};

export default SettingsPage;
