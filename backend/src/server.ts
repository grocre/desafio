import { ApolloServer } from "apollo-server"
import cardSchema from "./schema"
import cardResolvers from "./resolvers/cardResolver"

const typeDefs = [cardSchema]
const resolvers = [cardResolvers]

const Server = new ApolloServer({
    typeDefs,
    resolvers
})

Server.listen(3333)