import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  // Opschonen
  await prisma.comment.deleteMany()
  await prisma.item.deleteMany()
  await prisma.user.deleteMany()

  // 1. Maak test gebruikers
  const youssef = await prisma.user.create({
    data: {
      name: 'Youssef',
      email: 'youssef@example.com',
    }
  })

  const mohandis = await prisma.user.create({
    data: {
      name: 'Mohandis',
      email: 'mohandis@example.com',
    }
  })

  // 2. Maak test items
  const items = [
    { title: 'Hogedrukreiniger Kärcher', description: 'Krachtige hogedrukreiniger voor terrasreiniging.', ownerId: youssef.id },
    { title: 'Partytent 3x6m', description: 'Grote waterdichte partytent voor tuinfeesten.', ownerId: youssef.id },
    { title: 'Klopboormachine', description: 'Professionele boormachine voor beton.', ownerId: mohandis.id },
    { title: 'Bakfiets (Elektrisch)', description: 'Handige bakfiets voor zware boodschappen of kinderen.', ownerId: mohandis.id },
    { title: 'Beamer Full HD', description: 'Perfect voor een filmavond in de tuin.', ownerId: youssef.id },
  ]

  for (const itemData of items) {
    const item = await prisma.item.create({ data: itemData })
    
    // 3. Voeg voorbeeld comments toe
    await prisma.comment.create({
      data: {
        content: `Is de ${item.title} nog beschikbaar voor aankomend weekend?`,
        authorId: mohandis.id,
        itemId: item.id
      }
    })
  }

  console.log('Seeding voltooid: 2 gebruikers, 5 items en comments aangemaakt.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
