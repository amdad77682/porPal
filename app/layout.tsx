import Layout from "@components/Layout";
import type { Metadata } from "next";
import "../styles/index.scss";

export const metadata: Metadata = {
  title: "",
  description: "",
  icons: ["/web-static/images/favicon-96x96.png"],
  openGraph: {
    title: "",
    description: "",
    images: [],
  },
};
if (process.env.NEXT_MANUAL_SIG_HANDLE) {
  // this should be added in your custom _document
  process.on("SIGTERM", () => {
    // eslint-disable-next-line no-console
    console.log("Received SIGTERM: ", "cleaning up");
    process.exit(0);
  });

  process.on("SIGINT", () => {
    // eslint-disable-next-line no-console
    console.log("Received SIGINT: ", "cleaning up");
    process.exit(0);
  });
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="" lang="en">
      <head></head>
      <body>
        <div id="__loader" />

        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
