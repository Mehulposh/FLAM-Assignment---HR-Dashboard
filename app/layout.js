
import Header from '@/components/Header/Header';
import '../styles/globals.css'  





export const metadata = {
  title: "HR Dashboard",
  description: "Track Employee Perforance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className='bg-gray-200'
      >
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
