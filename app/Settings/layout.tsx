import React from 'react'

const SettingsLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        <h1>Ben test layoutundaki h1 im</h1>
        {children}
    </div>
  )
}

export default SettingsLayout