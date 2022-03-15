import { ApolloServer } from "apollo-server"
import cardSchema from "./schema"
import Resolvers from "./resolvers/resolvers"

const typeDefs = [cardSchema]
const resolvers = [Resolvers]

const Server = new ApolloServer({
    typeDefs,
    resolvers
})

Server.listen(3333)