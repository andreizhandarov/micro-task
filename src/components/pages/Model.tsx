import React from 'react';
import { useParams } from 'react-router-dom';
import { adidasArr, AdidasItem } from './Adidas';
import { pumaArr, PumaItem } from './Puma';

type CrossModel = {
    [key: string]: (AdidasItem[] | PumaItem[])
}

const crossModel: CrossModel={
    adidas: adidasArr,
    puma: pumaArr
}

export const Model = () => {
    // const params = useParams()
    const {model, id} = useParams();
    console.log(model)
    // const product = adidasArr.find(item => item.id === Number(params.id));
    const product = model ? crossModel[model].find(item => item.id === Number(id)) : null;
    console.log(product) 

    return (
        <div>
            <div style={{textAlign: 'center'}}>
                {product 
                    ?  <>
                        <h2>{product.model}</h2>
                        <h4>{product.collection}</h4>
                        <h3>{product.price}</h3>
    
                        <img src={product.picture} 
                            alt={product.model}
                            style={{width: '600px', height: 'auto', marginRight: '10px'}} 
                        />
                        </> 
                    : <div> Модель отсутствует </div>}
                </div>
        </div>
    );
};

