// Write your code here
import {useState} from 'react'

import {
  AppContainer,
  Heading,
  Para,
  Image,
  Description,
  Button,
} from './styledComponents'

const ReadMore = ({reactHooksDescription}) => {
  const [showFullText, setShowFullText] = useState(false)

  const toggleText = () => {
    setShowFullText(!showFullText)
  }

  return (
    <AppContainer>
      <Heading>React Hooks</Heading>
      <Para>Hooks are a new addition to React</Para>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <Description>
        {showFullText
          ? reactHooksDescription
          : reactHooksDescription.slice(0, 170)}
      </Description>
      <Button onClick={toggleText}>
        {showFullText ? 'Read Less' : 'Read More'}
      </Button>
    </AppContainer>
  )
}

export default ReadMore
