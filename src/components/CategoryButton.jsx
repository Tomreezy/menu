import React from 'react'

const CategoryButton = ({button,index,setButtonIndex}) => {
  return (
    <div>
        <button onClick={()=> setButtonIndex(index)} className='bg-amber-500 transition-all  hover:bg-amber-600 px-2 flex items-center justify-center text-white text-sm rounded-md'>{button}</button>
    </div>
  )
}

export default CategoryButton