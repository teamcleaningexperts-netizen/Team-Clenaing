import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
import BackToTop from './BackToTop'
import MobileBottomBar from './MobileBottomBar'

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="pb-[4.75rem] sm:pb-0">
        <Outlet />
      </main>
      <Footer />
      <MobileBottomBar />
      <BackToTop />
    </>
  )
}
