import React, { useRef } from 'react'
import Card from './Card'
import Navigation from './Navigation';

const Foreground = () => {

  const ref = useRef(null);
  // description , filesize , close or download icon , tag
  const data= [
    {
      desc: "This is a sample file description to show how the card will look like in the foreground. ", 
      filesize: "0.4mb", 
      close: true, 
      tag: {isOpen: true, tagTitle: "Download Now",tagColor: "green"}, 
    },
    {
      desc: "This is a sample file description to show how the card will look like in the foreground. ", 
      filesize: "0.4mb", 
      close: false, 
      tag: {isOpen: false, tagTitle: "Download Now",tagColor: "green"}, 
    },
    {
      desc: "This is a sample file description to show how the card will look like in the foreground. ", 
      filesize: "0.4mb", 
      close: true, 
      tag: {isOpen: true, tagTitle: "Download Now",tagColor: "sky"}, 
    }
  ];

  return (
    <>
      <div className=' w-full h-[10%] '>
        <Navigation />
      </div>
      <div ref={ref} className='fixed relative top-0 left-0 z-[3] w-full h-[90%] p-2 flex gap-4 flex-wrap '>
          {data.map((item, index)=>(
            <Card data={item} reference={ref}/>
          ))}
      </div>
    </>
  )
}

export default Foreground