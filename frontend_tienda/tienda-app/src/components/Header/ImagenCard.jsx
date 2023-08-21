import { useEffect, useState } from "react";
import axios from 'axios';

const ImagenCard = (props) => {

    const [imagen, setImagens] = useState(null);
    console.log(imagen);

    const traerImagen = async () => {
        try {
            const response = await axios.get(`http://localhost:8085/product/one/${props.id}/preview`,{
                responseType : 'arraybuffer'
            });

            const blob = new Blob([response.data],{type:'image/png'});

            const imgUrl = URL.createObjectURL(blob);

            setImagens(imgUrl)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        traerImagen();
    }, [])

    return (
        <>

                     <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                         <img src={imagen} alt={imagen}

                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
            </div>

        </>
    )
}

export default ImagenCard;