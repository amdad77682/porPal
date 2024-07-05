import "../styles/index.scss";
import type { AppProps } from "next/app";
import Main from "@components/Main";

function MyApp(props: AppProps) {
  return (
    <>
      <Main {...props} />
    </>
  );
}

export default MyApp;
