export type frontMatter = {
  title: string,
  date: string,
  tag: string[],
  subtitle?: string,
  draft?: boolean
}

export type mdx = {
  slug: string,
  frontmatter: frontMatter,
  id: string,
  body: string
}