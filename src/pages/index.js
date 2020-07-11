import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import ImageCard from "../components/ImageCard"
import Navigation from "../components/Navigation"
import "./index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className="Heading">William<br />To</h1>
    <div className="Content">
      <ImageCard theme="light" />
      <Navigation />
    </div>
  </Layout>
)

export default IndexPage
