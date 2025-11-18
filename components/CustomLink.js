// components/CustomLink.js
import NextLink from 'next/link';

export default function Link({ children, ...props }) {
  return <NextLink {...props} legacyBehavior>{children}</NextLink>;
}
