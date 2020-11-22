import React, { Component } from 'react';
import {fetchDailyData} from './DAL/api';
import { Inputs } from './Inputs';
import { Results } from './Results';


import './custom.css'

export default class App extends Component {
    state = {
      layerHeight: 5,
      startTemperatyreMaterial: 600,
      startTemperatyreGas: 20,
      gasSpeed: 0.6,
      averageWarmEating: 1.34,
      materialConsumption: 1.7,
      averageMaterialEating: 1.49,
      volumeCoefofWarmReturning: 2450,
      agregateDiametr: 2.1,
      data: null
    }
  
    onChandgeHandler = (e) => {
      const value = e.target.value
      if(!isNaN(value) || value){
        this.setState({
          [e.target.name]: +value
        })
      }
      console.log(this.state);
    }

    getRequest = async () => {
      let flag = true;
      Object.values(this.state).forEach(item => {
        if (!item && item !== null) flag = false
      })

      if (flag) {
        this._buttun.disabled = true;
        const fetchData = await fetchDailyData(this.state); 
        this.setState({data:fetchData})
      } else{
        alert('Нулевые значения недопустимы');
      }

    }

    reset = () => {
      this._buttun.disabled = false;
      this.setState({data:null});
    }

  
  render() {
    return (
      <> 
      <div className='wrapper'>
        <Inputs
        onChandgeHandler={this.onChandgeHandler} 
        layerHeight={this.state.layerHeight} 
        startTemperatyreMaterial={this.state.startTemperatyreMaterial}
        startTemperatyreGas={this.state.startTemperatyreGas}
        gasSpeed={this.state.gasSpeed}
        averageWarmEating = {this.state.averageWarmEating}
        materialConsumption={this.state.materialConsumption}
        averageMaterialEating={this.state.averageMaterialEating}
        volumeCoefofWarmReturning={this.state.volumeCoefofWarmReturning}
        agregateDiametr={this.state.agregateDiametr}
        />
        <input ref={(a) => this._buttun = a} className='fetchButton' type="button" value='Рассчет' disabled={this.state.disarmButton} onClick={()=>this.getRequest()}/>
        
      </div>
      <div className='wrapper wrapper-results'>
        <Results data={this.state.data} />
        {this.state.data ? <input type="button" className='fetchButton' value='Попробовать ещё' onClick={(e) => this.reset()} /> : null}
      </div>
      
      </>
    );
  }
}
