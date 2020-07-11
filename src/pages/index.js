import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import ImageCard from "../components/ImageCard"
import Navigation from "../components/Navigation"
import ThemeToggle from "../components/ThemeToggle"
import "./index.css"

import { AppContextProvider } from "../contexts/AppContext"

const IndexPage = () => (
  <AppContextProvider>
    <Layout>
      <SEO title="Home" />
      <h1 className="Heading">William<br />To</h1>
      <div className="Content">
        <ImageCard />
        <Navigation />
        <ThemeToggle />
      </div>
    </Layout>
  </AppContextProvider>
)

export default IndexPage
