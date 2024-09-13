import { Poppins } from "next/font/google";
import "./styles/globals.scss";
import Navbar from "./Navbar/page";
import Footer from "./Footer/page";


const poppins = Poppins({
  weight:['500', '700'],
  subsets:["latin"]
});

export const metadata = {
  title: "New app",
  description: "Discover Quality and Precision with Raana Tech Fabs- Your Fabrication Expert",
  keywords:" Electrical-panels Gates Press-tools Clamp-Washers press-components name-plates name-tags"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
      <Navbar/>
        {children}
        <Footer/>
       </body>
    </html>
  );
}
