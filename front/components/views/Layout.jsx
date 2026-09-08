import { useRouter } from "next/router";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";

export const Layout = ({ navigation, children }) => {
  const router = useRouter();

  if (!navigation) {
    return null;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar navbar={navigation.navbar} />
      <main
        className={
          router.pathname !== "/"
            ? "flex flex-1 flex-col px-3 py-8 sm:px-[10%]"
            : "flex flex-1 flex-col"
        }
      >
        {children}
      </main>
      <Footer footer={navigation.footer} />
    </div>
  );
};
