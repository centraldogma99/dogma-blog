export type FrontMatter = {
  title: string
  date: string
  tag: string[]
  subtitle?: string
  draft?: boolean
}

export type Mdx = {
  slug: string
  frontmatter: FrontMatter
  id: string
  body: string
}
