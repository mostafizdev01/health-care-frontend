import { Footer } from "@/src/components/shared/footer";
import { Navbar } from "@/src/components/shared/navbar";


function CommonLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" flex flex-col min-h-dvh">
      <Navbar />
      <div className=" flex flex-1 justify-center items-center overflow-hidden">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default CommonLayout;