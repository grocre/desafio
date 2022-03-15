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

            let tags = await prisma.tag.createMany({data: args.tags})
            let card = await prisma.card.create({data: args})

            //ver uma maneira de relacionar os dois no resolver

            return card
        }
    }
}

export default Resolvers;