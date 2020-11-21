import React from 'react';

export const Inputs = (props) => {
    const input = []
    const setInputs = () => {
        for(const key in props){
            input.push(
                <input className='startInput' onChange={props.onChandgeHandler} key={key} type="text" value={props[key]} name={key.toString()}/>
            )
        }
        input.shift()
        return input
    }
    
    return ( 
        <>
        <h2>Входные параметры</h2>
        <div className='inputsContainer'>
            <div className='inputsDescription'>
                <p>Высота слоя, м</p>
                <p>Начальная температура материала</p>
                <p>Начальная температура газа</p>
                <p>Скорость газа на свободное сечение шахты</p>
                <p>Средняя теплоемкость газа</p>
                <p>Расход материалов </p>   
                <p>Теплоемкость материалов</p>
                <p>Объемный коэффициент теплоотдачи</p>
                <p>Диаметр аппарата</p>
            </div>
            <div className='inputs'>
                {setInputs() || 'Ничего нет?'}
            </div>
        </div>
        </>
    ) 
} 