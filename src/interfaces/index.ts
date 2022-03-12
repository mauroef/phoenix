export interface Node {
  id: string
  body?: string
  frontmatter: { pid?: number; title?: string; description: string, stack: string[] }
}
