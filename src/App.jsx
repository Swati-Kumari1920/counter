import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super()
    this.state={
      count:0
    }
  }

  
  render() {
    return (
     
      <div className='flex flex-col justify-center items-center h-[100vh] gap-3'>

      <h1 className='text-[3rem]'>count:{this.state.count}</h1>

      <button className='bg-pink-400 text-white px-5 py-2 rounded font-bold' onClick={()=>{this.setState({count:this.state.count+1})}}>Increment</button>

      <button className='bg-blue-400 px-5 py-2 rounded text-white font-bold' onClick={()=> {this.state.count>0?this.setState({count:this.state.count-1}):alert('Negative number are not allowed')}}>Decrement</button>
      
       
       <button className='bg-red-500 text-white px-5 py-2 rounded font-bold' onClick={()=>{
        this.setState({count:0})

       }}>Reset</button>
      

      
      
      </div>

    )
  }
}
