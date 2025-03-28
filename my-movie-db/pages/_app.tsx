import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ComponentType, ReactNode } from "react";

type NextPageWithLayout = ComponentType & {
  getLayout?: (page: ReactNode) => ReactNode;
};

export default function App({ Component, pageProps }: AppProps) {
  const PageComponent = Component as NextPageWithLayout;
  const getLayout = PageComponent.getLayout ?? ((page) => <Layout>{page}</Layout>);

  return getLayout(<PageComponent {...pageProps} />);
}
