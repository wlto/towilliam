import React, { useEffect } from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Heading from "../components/Heading"
import ImageCard from "../components/ImageCard"
import Navigation from "../components/Navigation"
import ThemeToggle from "../components/ThemeToggle"
import playAnimation from "../animations"
import "./index.css"

import { AppContextProvider } from "../contexts/AppContext"

const IndexPage = () => {

  useEffect(() => {
    playAnimation()
  }, [])

  return (
    <AppContextProvider>
      <Layout>
        <SEO title="Home" />
        <Heading>William To</Heading>
        <div className="Content">
          <ImageCard />
          <Navigation />
        </div>
        <ThemeToggle />
      </Layout>
    </AppContextProvider>
  )
}

export default IndexPage
