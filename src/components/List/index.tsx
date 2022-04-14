import React, { FC } from 'react'
import { ListStyled } from './styles'
import Card from '../Card/'
import { Node } from '../../interfaces'

interface ListProps {
  items: {
    allMdx: {
      nodes: Array<Node>
    }
  }
}

const List: FC<ListProps> = ({ items }) => {
  return (
    <ListStyled>
      {items.allMdx.nodes.map((node: Node) => (
        <Card
          key={node.id}
          title={node.frontmatter.title || ''}
          description={node.frontmatter.description}
          demo={node.frontmatter.demo || ''}
          repo={node.frontmatter.repo || ''}
          stack={node.frontmatter.stack || []}
          image={node.frontmatter.image}
        />
      ))}
    </ListStyled>
  )
}

export default List
