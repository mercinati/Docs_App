import React from 'react'
import { FaFileAlt } from "react-icons/fa";   //file icon
import { MdOutlineFileDownload } from "react-icons/md";   //download icon
import { IoClose } from "react-icons/io5";   //close icon  
import { motion, scale } from "motion/react"

const Card = ({data,reference}) => {
  return (
    
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.1}} className='relative flex-shrink-0 w-55 h-62 p-5 rounded-[30px] bg-zinc-900/90 text-white overflow-hidden shadow-md shadow-black/50'>
        <FaFileAlt />
        <p className='text-sm leading-tight mt-5 font-semibold '>{data.desc}</p>
        <div className='footer absolute left-0 w-full bottom-0  '>
            <div className='flex items-center justify-between py-1 px-7 mb-3'>
                <h5>{data.filesize}</h5>
                <span className='w-6 h-6 bg-zinc-500 rounded-full flex items-center justify-center text-zinc-900'>
                    {data.close ? <IoClose /> : <MdOutlineFileDownload size=".9em"/>}   
                </span>
            </div>
            {data.tag.isOpen && (
            <div className={`tag w-full py-4 ${data.tag.tagColor === "green" ? "bg-green-600" : "bg-sky-600"} flex items-center justify-center font-semibold`}>
                <h3 className='text-md'>{data.tag.tagTitle}</h3>  
            </div>
            ) }
        </div>
    </motion.div>
  
  )
}

export default Card