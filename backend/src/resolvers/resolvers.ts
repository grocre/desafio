import prisma from "../database"

type Tag = {
    name: string
}

type Card = {
    texto: string;
}

const Resolvers = {

    Query: {
        allTags: () => {
            return prisma.tag.findMany()
        }, 
        allCards: () => {
            return prisma.card.findMany()
        }
    },

    Mutation: {

        addTag: async (_root: any, args:Tag, _context: any) => {
            let tag:Tag = args
            return await prisma.tag.create({data: tag})
        },
        addCard: async (_root:any, args: Card, _context: any) => {
            let card: Card = args
            await prisma.card.create({data: card})
        }
    }
}

export default Resolvers;