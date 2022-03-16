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

type Query {
    allTags: [Tag]
    allCards: [Card]
}

type Mutation {
    addTag(name: String): Tag
    addCard(texto: String, tags: [inputTag]): Card
}

`

export default cardSchema