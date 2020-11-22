import React, {useState} from 'react';
import Table from './Table';
import MicroTable from './MicroTable'; 
import { Charts } from './Charts';

export const Results = ({data}) => {
    return(
        <div style={{textAlign:'center'}}>
            <h2>Результаты расчёта</h2>
            {data ? <div><MicroTable props={data} /><br/><h2>Расчет для выделенных точек с заданными координатами</h2></div> : null}
            {data ? <Table props={data} /> : 'бесы шалят, данных пока нет...'}
            {data ? <Charts props={data} />: null}
        </div>
    )
}