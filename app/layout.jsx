import '@styles/globals.css';
export const metadata = {
  title: 'Share mind',
  description: 'Share you mind and discover',
};
const RootLayout = () => {
  return (
    <html lang='en'>
      <body>
        <div className='main'>
          <div className='gradient'>
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
