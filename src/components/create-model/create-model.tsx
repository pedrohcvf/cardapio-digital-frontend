import { useState } from 'react'
import { useFoodDataMutate } from '../../hooks/useFoodDataMutate';
import type { foodData } from '../../interface/FoodData';

import "./model.css";

interface InputProps{
    label: string,
    value: string | number,
    updateValue(value: any): void
}

const Input = ({label, value, updateValue}: InputProps) =>{
    return(
        <>
            <label>{label}</label>
            <input value={value} onChange={e => updateValue(e.target.value)}></input>
        </>
    )
}

export function CreateModel(){
    const [price, setPrice] = useState(0);
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const {mutate} = useFoodDataMutate();

    const submit = () => {
        const foodData: foodData ={
            price,
            title,
            image
        }
        mutate(foodData);
    }


    return(
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastre um novo item ao cardápio</h2>
                <form className="input-container">
                    <Input label="title" value={title} updateValue={setTitle}></Input>
                    <Input label="price" value={price} updateValue={setPrice}></Input>
                    <Input label="image" value={image} updateValue={setImage}></Input>
                    <button onClick={submit} className='btn-secondary'>Confirmar</button>
                </form>
            </div>
        </div>
    )
}