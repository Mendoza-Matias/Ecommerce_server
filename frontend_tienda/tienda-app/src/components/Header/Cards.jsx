import { useState, useEffect } from "react";
import axios from 'axios';
import ImagenCard from "./ImagenCard";

const Cards = () => {

    const [product, setProduct] = useState([]);
   
    console.log(product)

    const traerData = async () => {
        try {
            const response = await axios.get('http://localhost:8085/product/all');
            setProduct(response.data.productos)
        } catch (error) {
            console.log(error)
        }
    }

   
    useEffect(() => {
        traerData();
    }, []);


    return (
        <>
      <div className="flex flex-row gap-5 mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        {product.map((productos)=>{
            return(
                <div key={productos._id}>
                <div className="mt-6 flex">
                <div  className="group relative">
                <ImagenCard id={productos._id}/>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-white">
                        <a >
                          <span aria-hidden="true" className="absolute inset-0" />
                          {productos.nombre}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">{productos.tipo}</p>
                    </div>
                    <p className="text-sm font-medium text-white">${productos.precio}</p>
                  </div>
                  <button class="w-60 text-center mt-5 bg-gray-500">Comprar</button>
                </div>
            </div>
            </div>
            )
        })}
       
      </div>
        </>
    )
}

export default Cards;