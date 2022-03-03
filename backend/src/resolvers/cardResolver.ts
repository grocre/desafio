import prisma from "../database"

type Tag = {
    name: string
}

type Card = {
    texto: string;
    data_criacao: Date;
    data_modificacao: Date;
    tagsOnCard: [Tag]
}

const cardResolvers = {

    Query: {
        allTags: () => {
            return prisma.tag.findMany()
        }, 
        allCards: () => {
            return prisma.card.findMany()
        }
    },

    Mutation: {
        addTag: async (tag: Tag) => prisma.tag.create({ data: tag }),
        addCard: async (card: Card) => prisma.card.create({ data: card })
    }
}

export default cardResolvers