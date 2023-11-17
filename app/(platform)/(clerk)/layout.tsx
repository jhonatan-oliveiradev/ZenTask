const ClerkLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex h-full items-center justify-center bg-zinc-900 bg-opacity-95">
      {children}
      <div className="z- absolute left-0 top-0 -z-10 flex h-full w-full items-center justify-center bg-[url('/bg-auth.jpg')] bg-cover bg-no-repeat"></div>
    </div>
  );
};

export default ClerkLayout;
