import React from 'react'
import { Line } from "react-chartjs-2";

export const Charts = ({ props }) => {

    const resultRows = new Array(9).fill(0).map((_, index) => index / 2);

    const line6Data = props.line6.map(item => item);

    const line7Data = props.line7.map(item => item);

    const line8Data = props.line8.map(item => item);

    return (
        <div style={{marginTop: '30px'}}>
            <h3>Изменение температур материала и газа по высоте слоя</h3>
            <Line 
            data={{
            labels: resultRows.map(item => item),
            datasets: [
                {
                data: line6Data,
                label: "Материал",
                borderColor: "rgba(77, 37, 221, 0.7)",
                backgroundColor: "transparent",
                },
                {
                data: line7Data,
                label: "Газ",
                borderColor: "rgba(221, 37, 37, 0.7)",
                backgroundColor: "transparent",
                },
            ],
            }}
        />
        <h3>Разность температур материала и газа по высоте слоя</h3>
        <Line 
            data={{
            labels: resultRows.map(item => item),
            datasets: [
                {
                data: line8Data,
                label: "Tm - Tg",
                borderColor: "rgba(255, 0, 255, 0.7)",
                backgroundColor: "transparent",
                },
            ],
            }}
        />
      </div>
      );
  };
