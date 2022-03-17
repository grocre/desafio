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
            return prisma.card.findMany({where: {
                //implementar o inner join
            })
        }
    },

    Mutation: {

        addTag: async (_root: any, args:Tag, _context: any) => {
            return await prisma.tag.create({data: args})
        },

        addCard: async (_root: any, args: Card, _context: any) => {

            args = JSON.parse(JSON.stringify(args))
            let card = await prisma.card.create({data: {
                texto: args.texto
            }})

            args.tags.forEach(async tag => {
                let tagged = await prisma.tag.create({data: tag})
                await prisma.tagsOnCard.create({data: {
                    cardId: card.id, 
                    tagId: tagged.id
                }})
            })

            return card
        }
    }
}

export default Resolvers;