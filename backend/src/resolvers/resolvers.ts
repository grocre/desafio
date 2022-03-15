import prisma from "../database"

type Tag = {
    name: string
}

type Card = {
    texto: string;
    tags: Array<Tag> //pensar em uma maneira diferente
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
            return await prisma.tag.create({data: args})
        },
        addCard: async (_root:any, args: Card, _context: any) => {
            await prisma.card.create({data: args})
        }
    }
}

export default Resolvers;