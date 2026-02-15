import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import { auth } from "@/lib/auth"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
const app = new Hono().basePath('/api')

// --- Items Routes ---
app.get('/items', async (c) => {
  const items = await prisma.item.findMany({
    include: { owner: { select: { name: true, image: true } } }
  })
  return c.json(items)
})

app.get('/items/:id', async (c) => {
  const id = c.req.param('id')
  const item = await prisma.item.findUnique({
    where: { id },
    include: { 
      owner: { select: { name: true, image: true } },
      comments: { include: { author: { select: { name: true, image: true } } }, orderBy: { createdAt: 'asc' } }
    }
  })
  if (!item) return c.json({ error: 'Item not found' }, 404)
  return c.json(item)
})

app.post('/items', async (c) => {
  const session = await auth.api.getSession({ headers: c.req.raw.headers })
  if (!session) return c.json({ error: 'Unauthorized' }, 401)
  const body = await c.req.json()
  const item = await prisma.item.create({
    data: { title: body.title, description: body.description, ownerId: session.user.id }
  })
  return c.json(item, 201)
})

// --- Comments API ---
app.post('/items/:id/comments', async (c) => {
  const session = await auth.api.getSession({ headers: c.req.raw.headers })
  if (!session) return c.json({ error: 'Unauthorized' }, 401)
  
  const itemId = c.req.param('id')
  const body = await c.req.json()
  
  const comment = await prisma.comment.create({
    data: {
      content: body.content,
      authorId: session.user.id,
      itemId: itemId
    }
  })
  return c.json(comment, 201)
})

export const GET = handle(app)
export const POST = handle(app)
export const PUT = handle(app)
export const DELETE = handle(app)
export const PATCH = handle(app)
