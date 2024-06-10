import { Layout, LayoutHeader, NavItem, LayoutBody } from "@/styles/dsc";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <LayoutHeader>
        <Link href="/" passHref>
          <NavItem>Home</NavItem>
        </Link>
        <Link href="/items" passHref>
          <NavItem>Items</NavItem>
        </Link>
        <Link href="/design-system" passHref>
          <NavItem>Design System</NavItem>
        </Link>
      </LayoutHeader>
      <LayoutBody>
        <Component {...pageProps} />
      </LayoutBody>
    </Layout>
  );
}
