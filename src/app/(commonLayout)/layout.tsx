import { Footer } from "../components/shared/footer";
import { Navbar } from "../components/shared/navbar";

function CommonLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className=" flex min-h-dvh">
        {children}
      </div>
      <Footer />
    </>
  )
}

export default CommonLayout;