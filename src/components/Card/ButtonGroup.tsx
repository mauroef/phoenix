import React, { FC } from 'react'
import { FlowMerge, Eye } from '@emotion-icons/typicons'

interface ButtonGroupProps {
  repo: string
  demo: string
}

const ButtonGroup: FC<ButtonGroupProps> = ({ repo, demo }) => {
  const isRepoAvailable = repo !== ''
  const isDemoAvailable = demo !== ''

  return (
    <div>
      <a
        href={isRepoAvailable ? repo : '#'}
        target={isRepoAvailable ? '_blank' : '_self'}
        className={isRepoAvailable ? '' : 'not-available'}
      >
        <FlowMerge size='23' />
        <span>Repo</span>
      </a>
      <a
        href={isDemoAvailable ? demo : '#'}
        target={isDemoAvailable ? '_blank' : '_self'}
        className={isDemoAvailable ? '' : 'not-available'}
      >
        <Eye size='23' />
        <span>Demo</span>
      </a>
    </div>
  )
}

export default ButtonGroup
