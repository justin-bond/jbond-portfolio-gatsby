import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export default () => <div>
  <AniLink 
    to="/project/kushion"
    cover
    bg="#191919"
    direction="right"
    duration={1}
  >
    Kushion
  </AniLink>
  <br />
  <AniLink 
    fade
    to="/project/vizio-tvp"
  >
    project 2
  </AniLink>
</div>
