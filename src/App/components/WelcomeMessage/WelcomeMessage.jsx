import React from 'react'
import { useSelector } from 'react-redux'
import { Message } from './WelcomeMessage.styled'

const WelcomeMessage = () => {
  const { username } = useSelector(state => state.user)
  return (
    <Message>Welcome to the weather app <span className='userName'>'{username.toUpperCase()}'</span></Message>
  )
}

export default WelcomeMessage