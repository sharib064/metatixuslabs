import Head from "next/head"

const PageTitle = ({ children }) => {
  return (
    <Head>
      <title>{children}</title>
      <link rel="icon" href="/favicon.png" type="image/png" />
    </Head>
  )
}
export default PageTitle
