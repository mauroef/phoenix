import React, { FC } from 'react'

interface TechStackProps {
  stack: string[]
}

const TechStackProps: FC<TechStackProps> = ({ stack }) => {
  console.log('lo que recibe ',stack)
  return (
    <div>
      {stack.map((tech: string) => <p>{tech}</p>)}
    </div>
  )
}

export default TechStackProps
