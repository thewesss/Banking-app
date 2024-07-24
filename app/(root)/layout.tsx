import Sidebar from "@/components/ui/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn ={ firstName: 'Wesley', lastName: 'Mutyambizi'};

  return (
   <main className="flex h-screen w-full font-inter">
     <Sidebar user={loggedIn} />
     {children}
   </main>
  );
}