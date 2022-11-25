import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

export const useFetchGifs = (categoria) => {

   // esto es un custom hook
   const [images, setImages] = useState([])
   const [isLoading, setIsLoading] = useState( true )
   
     const getImages = async () => {
     const newImages = await getGifs(categoria)
     setImages(newImages)
     setIsLoading(false)
   }
   useEffect(() => {
     getImages()
   }, [])
  return {
    images,
    isLoading
  }
    
  
}
