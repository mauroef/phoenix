import React, { FC } from 'react'

interface TechStackProps {
  stack: string[]
}

const TechStackProps: FC<TechStackProps> = ({ stack }) => {
  return (
    <div>
      {stack.map((tech: string) => <p key={tech}>{tech}</p>)}
    </div>
  )
}

export default TechStackProps
