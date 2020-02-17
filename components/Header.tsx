import Link from 'next/link';

// import React from 'react';

type HeaderProps = {
  // title: string;
};

const linkStyle = { marginRight: 15 };

const Header: React.FC = () => {
  return (
    <div>
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>

      <Link href="/about">
        <a style={linkStyle}>About</a>
      </Link>
    </div>
  );
};

export default Header;
