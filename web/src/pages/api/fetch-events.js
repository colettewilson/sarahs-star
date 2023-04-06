import { getClient } from "../../../lib/sanity"
import { groq } from 'next-sanity'

async function getDetail(id) {
  const events = await getClient().fetch(groq`*[_type == 'event']`)

  return events
}

export default async function handler(req, res) {
  const { query: { id } } = req

  try {
    const detail = await getDetail(id)
    return res.status(200).json(detail)
  } catch (error) {
    return res.status(500).json({ error: 'failed to load data' })
  }
}