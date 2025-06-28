import React from 'react'
import { FaFileAlt } from "react-icons/fa";        //file icon
import { MdOutlineFileDownload } from "react-icons/md";      //download icon

const Card = () => {
  return (
    <>
    <div className='m-2 relative w-60 h-65 p-5 rounded-[30px] bg-zinc-900/90 text-white overflow-hidden shadow-md shadow-black/50'>
        <FaFileAlt />
        <p className='text-sm leading-tight mt-5 font-semibold '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, distinctio!</p>
        <div className='footer absolute left-0 w-full bottom-0  '>
            <div className='flex items-center justify-between py-3 px-7 mb-3'>
                <h5>0.4mb</h5>
                <span className='w-6 h-6 bg-zinc-500 rounded-full flex items-center justify-center text-zinc-900'>
                    <MdOutlineFileDownload size=".9em"/>
                </span>
            </div>
            <div className='tag w-full py-4 bg-green-600 flex items-center justify-center font-semibold'>
                <h3 className='text-md'>Download Now</h3>
            </div>
        </div>
    </div>
    </>
  )
}

export default Card