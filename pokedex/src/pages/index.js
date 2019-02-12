import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <article>
      <div>
      {data.pokedex.pokemons.map(pokemon => 
          <div>
            <a href="/pokemon">
              <img style={{ maxHeight: '150px' }} src={pokemon.image} alt={pokemon.name} />
              <dl>
                <dt>Name</dt>
                <dt>{pokemon.name}</dt>
              </dl>
            </a>
          </div>
        )}       
      </div>
    </article>
  </Layout>
)

export const query = graphql `
  query{
    pokedex{
      pokemons(first: 200){
        name, id, image
      }
    }
  }
`


export default IndexPage
