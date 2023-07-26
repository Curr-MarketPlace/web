'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { FaBell } from 'react-icons/fa'
import Topcreator from './Topcreator'
import Featuredcreators from './Featuredcreators'
import History from './History'
import SettingsModal from './comp/SettingsModal'

const index = () => {
  const [showMyModal, setshowMyModal] = useState(false)

  const handleOnClose = () => setshowMyModal(false)

  return (
    <div className=' min-h-[88%]  overflow-y-auto min-w-[30vw] hidden md:flex flex-col items-center  '>
      <div className=' w-full h-full flex flex-col items-center '>
        <SettingsModal onClose={handleOnClose} visible={showMyModal} />
        <Topcreator />
        <Featuredcreators />
        <History />
      </div>
    </div>
  )
}

export default index
