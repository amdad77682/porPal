import ErrorBoundary from "@components/ErrorBoundary";
import Layout from "@components/Layout";
import type { AppProps as NextAppProps } from "next/app";


const Main = ({ Component, pageProps }: NextAppProps) => {
  return (
    <ErrorBoundary>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ErrorBoundary>
  );
};

export default Main;
