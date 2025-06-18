export type UILinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  children: React.ReactNode;
  href?: string;
  isExternal?: boolean;
};