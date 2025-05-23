
import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from '@/lib/utils';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'HF Status',
  description: 'Displays availability of HF websites.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          `${geistSans.variable} ${geistMono.variable} antialiased`,
          "min-h-screen bg-background font-sans"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container relative flex h-14 max-w-screen-2xl items-center px-4">
                <div className="flex-1 flex justify-center items-center"> {/* Changed: Was "mr-4 hidden md:flex" */}
                  <a className="flex items-center space-x-2" href="/"> {/* Changed: Was "mr-6 flex items-center space-x-2" */}
                     <span className="font-bold sm:inline-block"> {/* Changed: Was "hidden font-bold sm:inline-block" */}
                       HF Status
                     </span>
                   </a>
                </div>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-2"> {/* Changed: Was "flex flex-1 items-center justify-end space-x-2" */}
                  <ThemeToggle />
                </div>
              </div>
            </header>
            <div className="flex-grow">
              {children}
            </div>
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
