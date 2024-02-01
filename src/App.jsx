import React ,{ useState } from 'react'
import data from '../data'
import LazyLoad from 'react-lazyload'

function App() {

  return (
    <React.Fragment>
      <h1>posts</h1>
      {data.map((item,index)=>{
         
        return ( <LazyLoad placeholder={<Loading />} key={index}>
        
                        <Posts title={item.title} body={item.body} key={index} randomImg={item.id}/>
                </LazyLoad>
          )
      })}
    </React.Fragment>
  )
}

function Posts({title,body,randomImg}){
  return (
      <div style={{border:'2px solid gray', margin:'20px'}}>
        
        <img src={`https://source.unsplash.com/random/200x200?sig=${randomImg}`} alt="" style={{height:'200px',width:'200px'}}/>
          <h1>{title}</h1>
          <p>{body}</p>
      </div>
  )
}

function Loading(){
  return (
    <h1>Loading...</h1>
  )
}

export default App;