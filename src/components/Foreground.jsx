import React from 'react'
import Card from './Card'

const Foreground = () => {

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
    <div className='fixed top-0 left-0 z-[3] w-full h-full p-3 flex gap-4 flex-wrap '>
        {data.map((item, index)=>(
          <Card data={item} />
        ))}
    </div>
  )
}

export default Foreground