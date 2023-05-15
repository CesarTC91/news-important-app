import Head from "next/head";

export default function PageLayout({ children, title = "Noticias del Toku" }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="The best app for read news" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>🗞️ newsapi</header>
      <main>{children}</main>
      <style jxs>
        {`
            header{
                padding: 20px
            }
        `}
      </style>
    </>
  );
}
