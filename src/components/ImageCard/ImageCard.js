import React, { useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import "./ImageCard.css"

import { AppContext } from "../../contexts/AppContext"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const ImageCard = () => {
  const data = useStaticQuery(
    graphql`
      query MyQuery {
        allImageSharp {
          edges {
            node {
              id
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    `
  )

  const { state } = useContext(AppContext)

  return (
    <div className="ImageCard">
      <BackgroundImage className="ImageCard-img" fluid={
        state.theme === `dark` ?
        data.allImageSharp.edges[0].node.fluid :
        data.allImageSharp.edges[1].node.fluid
      } fadeIn="soft" />    
    </div>
  )
}

export default ImageCard
