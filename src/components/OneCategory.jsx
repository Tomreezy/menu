import React from 'react'

const OneCategory = ({img,desc,title,price}) => {
  return (
   <article className='space-y-2 rounded-tl-md rounded-tr-md overflow-hidden'>
    <div className='h-1/2'>
        <img src={`${img}`} className='w-full h-full' />
    </div>
    <div className='p-4'>
        <div className='flex space-y-4 items-center justify-between'>
            <p className='font-bold'>{title}</p>
            <p className='bg-amber-500 rounded-md px-1 text-white '>{`$${price}`}</p>
        </div>
        <p className='text-slate-400 text-sm'>{desc}</p>
    </div>
   </article>
  )
}

export default OneCategory