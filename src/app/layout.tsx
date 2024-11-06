import './globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { Navbar } from '@/components/Navbar/Navbar';
import { GoogleProvider } from '@/lib/Google.provider';
import { ThemeProvider } from '@/components/shadcn/theme-provider';
import { Apollo } from '@/graphql/Apollo.provider';
import { SubsProvider } from '@/context/SubsContext';

const roboto = Roboto({ subsets: ['latin'], weight: ['300', '400', '500', '700', '900'] });

export const metadata: Metadata = {
   title: 'Youtube Clone',
   description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html
         lang="en"
         className="dark"
      >
         <body className={`${roboto.className} dark:bg-background dark:text-white bg-white text-black `}>
            <ThemeProvider
               attribute="class"
               defaultTheme="system"
            >
               <Apollo>
                  <GoogleProvider>
                     <SubsProvider>
                        <Navbar />
                        {children}
                     </SubsProvider>
                  </GoogleProvider>
               </Apollo>
            </ThemeProvider>
         </body>
      </html>
   );
}
