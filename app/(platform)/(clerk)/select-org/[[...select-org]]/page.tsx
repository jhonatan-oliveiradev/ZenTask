import { OrganizationList } from "@clerk/nextjs";

export default function CreateOrganizationPage() {
  return (
    <div>
      <OrganizationList
        hidePersonal
        afterSelectPersonalUrl="/organization/:id"
        afterSelectOrganizationUrl="/organization/:id"
      />
    </div>
  );
}
