import Header from '@/components/header';
import './globals.css';

// 레이아웃 전체의 기본 메타데이터로 설정,
// 라우트에 page.js 에서 메타데이터 설정시 덮어씌워짐
export const metadata = {
  title: 'NextPosts',
  description: 'Browse and share amazing posts.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
