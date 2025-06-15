import {Outfit,Ovo  } from "next/font/google";
import "./globals.css";

const Outfitfont= Outfit({
  subsets: ["latin"],weight:["400","500","600","700"]
});


const Ovofont = Ovo({
  subsets: ["latin"],weight:["400"]
});

export const metadata = {
  title: "Srabani's Portfolio",
  description: "React and Next js app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${Outfitfont.className} ${Ovofont.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
