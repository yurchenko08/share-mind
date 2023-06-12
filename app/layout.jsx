import '@styles/globals.css';

export const metadata = {
  title: 'Share mind',
  description: 'Share you mind and discover',
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <body>
      <div className='main'>
        <div className='gradient' />
      </div>

      <main className='app'>{children}</main>
    </body>
  </html>
);

export default RootLayout;
