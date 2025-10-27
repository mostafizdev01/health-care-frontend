import { Navbar } from "../components/shared/navbar";

function CommonLayout({children}: {children: React.ReactNode}) {
  return (
    <>
    <Navbar />
      {children}
    </>
  )
}

export default CommonLayout;