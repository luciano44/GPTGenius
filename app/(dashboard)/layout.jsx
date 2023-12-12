export const metadata = {
  title: "Dashboard",
  description: "Dashboard pages layout",
};

export default function Layout({ children }) {
  return (
    <>
      <h1 className="bg-orange-500 p-3 grid place-items-center text-black">
        MY LAYOUTTTTTTTTTT
      </h1>
      {children}
    </>
  );
}
