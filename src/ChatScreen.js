import React, { useState } from 'react'
import './ChatScreen.css'
import { Avatar } from '@material-ui/core'

function ChatScreen() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([
    {
      name: 'Gilfoyle',
      image:
        'https://www.music-covers-creations.com/wp-content/uploads/2018/07/Salvatore-Ganacci-DR-Screenshot-EDM.jpg',
      message: 'OMG!',
    },
  ])

  const handleSend = (e) => {
    e.preventDefault()
    setMessages([...messages, { message: input }])
    setInput('')
  }

  return (
    <div className='chatScreen'>
      <p className='chatScreen__timestamp'>
        YOU MATCHED WITH NINA ON 25/1/2022
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className='chatScreen__message'>
            <Avatar
              className='chatScreen__image'
              alt={message.name}
              src={message.image}
            />
            <p className='chatScreen__text'>{message.message}</p>
          </div>
        ) : (
          <div className='chatScreen__message'>
            <p className='chatScreen__textUser'>{message.message}</p>
          </div>
        )
      )}
      <form className='chatScreen__input'>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className='chatScreen__inputField'
          placeholder='Type a message...'
          type='text'
        />
        <button
          onClick={handleSend}
          type='submit'
          class='chatScreen__inputButton'
        >
          Send
        </button>
      </form>
    </div>
  )
}

export default ChatScreen
