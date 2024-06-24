import Router from "next/router"
import ProgressBar from "@badrap/bar-of-progress"

import { Layout, Overlay } from "@/components"

const progress = new ProgressBar({
  size: 5,
  color: "#06b6d4",
  className: "z-50",
  delay: 100,
})

Router.events.on("routeChangeStart", progress.start)
Router.events.on("routeChangeComplete", progress.finish)
Router.events.on("routeChangeError", progress.finish)

import "@/styles/globals.css"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Overlay />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
