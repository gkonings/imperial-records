import React from 'react'

const Portrait = ({user}) => {
  return (
    <div>
      <img src={user.photoUrl} alt={user.displayName} />
    </div>
  )
}

export default Portrait
