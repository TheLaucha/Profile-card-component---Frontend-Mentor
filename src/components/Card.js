import React from "react"
import avatar from "../images/image-victor.jpg"
import { GridCenter, Header, Container, Content, Image, Footer } from "./styles/Card.styled"

const Card = () => {
  return (
    <GridCenter>
      <Container>
        <Header></Header>
        <Content>
          <Image src={avatar} alt=''></Image>
          <div></div>
          <div>
            <h3>
              Victor Crest <span>26</span>
            </h3>
            <p>London</p>
          </div>
        </Content>
        <Footer>
          <div>
            <h3>80K</h3>
            <p>Followers</p>
          </div>
          <div>
            <h3>80K</h3>
            <p>Followers</p>
          </div>
          <div>
            <h3>80K</h3>
            <p>Followers</p>
          </div>
        </Footer>
      </Container>
    </GridCenter>
  )
}

export default Card
