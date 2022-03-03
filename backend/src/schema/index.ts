import { gql } from "apollo-server"

const cardSchema = gql`

scalar DateTime

type Card {
    id: Int
    texto: String!
    data_criacao: DateTime!
    data_modificacao: DateTime!
    tags: [Tag]
}

type Tag {
    id: Int
    name: String!
}

input inputTag {
    name: String!
}

input inputCard {
    texto: String!
    data_criacao: DateTime!
    data_modificacao: DateTime!
    tags: [Tag]
}

type Query {
    allTags: [Tag]
    allCards: [Card]
}

type Mutation {
    addTag(tag: inputTag): Tag
    addCard(card: inputCard): Card
}

`

export default cardSchema