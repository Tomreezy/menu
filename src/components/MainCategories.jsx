import { useState } from "react"
import menu from "../data/data"
import CategoryButton from "./CategoryButton"
import OneCategory from "./OneCategory"

const categories = ["all",...new Set( menu.map(item => item.category))]

const MainCategories = () => {
    const[data,setData]=useState(menu)

    function setButtonIndex(getIndex){
        const chosenCategory= categories[getIndex]
        if(chosenCategory=="all"){
            setData(menu)
        }
        else{
        const newMenu= menu.filter(item=> item.category===chosenCategory)
            setData(newMenu)
        }
    }

  return (
    <section className="mx-auto max-w-4xl">
        <h1 className="text-center mt-20 text-4xl ">Our Menu</h1>
        <div className="h-1 w-20 mx-auto bg-amber-500 mt-6 mb-6"></div>
        <div className="flex justify-center space-x-4">
            {categories.map((button,index)=>{
                return <CategoryButton button={button} setButtonIndex={setButtonIndex} index={index} key={index} />
            })}
        </div>
        <div className="grid  gap-4 mt-4 sm:grid-cols-2 md:grid-cols-3">
            {data.map((item,index)=>{
                return <OneCategory {...item} key={index} />
            })}
        </div>
    </section>
  )
}

export default MainCategories