import React from 'react'
import { FaRegCopyright } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='border-t border-slate-700 flex items-center justify-center text-center w-full py-5'>
        <div className='flex flex-col w-full'>
            <span>Designed and Developed by <b className='text-blue-800'>Gideon Ngetich</b></span>
            <span className='flex items-center justify-center'><FaRegCopyright /> 2024. All Rights Reserved</span>
        </div>
        <div>

        </div>
    </div>
  )
}

export default Footer