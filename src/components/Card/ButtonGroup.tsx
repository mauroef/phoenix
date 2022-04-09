import React, { FC } from 'react'

interface ButtonGroupProps {
  repo: string
  demo: string
}

const ButtonGroup: FC<ButtonGroupProps> = ({ repo, demo }) => {
  // FIXME: use pointer events none if repo / demo is empty
  return (
    <div>
      <a href={repo !== '' ? repo : '#'} target={repo !== '' ? '_blank' : '_self'}>
        Live Demo
      </a>
      <a href={demo !== '' ? demo : '#'} target={demo !== '' ? '_blank' : '_self'}>
        {' '}
        View Repo
      </a>
    </div>
  )
}

export default ButtonGroup
