import React, { FC } from 'react'

interface ButtonGroupProps {
  repo: string
  demo: string
}

const ButtonGroup: FC<ButtonGroupProps> = ({ repo, demo }) => {
  // FIXME: use pointer events none if repo / demo is empty
  return (
    <div>
      <a
        href={demo !== '' ? demo : '#'}
        target={demo !== '' ? '_blank' : '_self'}
      >
        {' '}
        View Repo
      </a>
      <a
        href={repo !== '' ? repo : '#'}
        target={repo !== '' ? '_blank' : '_self'}
      >
        Demo
      </a>
    </div>
  )
}

export default ButtonGroup
