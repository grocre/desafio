import prisma from "../database"

type Tag = {
    name: string
}

type Card = {
    texto: string;
    tags: Array<Tag>
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
        addCard: async (_root: any, args: Card, _context: any) => {

            args = JSON.parse(JSON.stringify(args))

            let tags = await prisma.tag.createMany({data: args.tags, skipDuplicates: true})
            let card = await prisma.card.create({data: {
                texto: args.texto
            }})


            //reorganizar para que possamos criar várias relações de uma vez

            // await prisma.tagsOnCard.createMany({})
            
            //ver uma maneira de relacionar os dois no resolver

            return card
        }
    }
}

export default Resolvers;