export type IPagination = {
  page: number
  limit: number
  total: number
  total_pages: number
}

export type IGame = {
  id: number
  name: string
  purchase_date: string
  media_type: string
  store: number
  value: number
}

export type ICategory = {
  id: number
  name: string
}
