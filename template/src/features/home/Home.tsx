/** @format */

import { Helmet } from "react-helmet"

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>React Nexus Kit</title>
        <meta name="description" content="Your description here" />

        <meta name="keywords" content="Your keywords here" />

        <meta property="og:title" content="Title for open graph" />
        <meta property="og:description" content="Description for open graph" />
        <meta property="og:image" content="Absolute link for your open graph image" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="absolute url of this page for your open graph" />
      </Helmet>
      <div>zis is ze content</div>
    </div>
  )
}
