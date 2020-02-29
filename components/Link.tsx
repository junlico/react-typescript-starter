import clsx from 'clsx';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

type LinkProps = {
  className?: string;
  href: string;
};

const Link: React.FC<LinkProps> = props => {
  const { children, className, href } = props;
  const { pathname } = useRouter();

  const cls = clsx('nav-link', className, { active: pathname === href });

  return (
    <NextLink href={href}>
      <a className={cls}>{children}</a>
    </NextLink>
  );
};

export default Link;
