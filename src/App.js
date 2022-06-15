import React,{useEffect,useState}from "react";
import "./style.css";
// import Data from './Component/Data'


export default function App() {
  let [data,setData]=useState([])
 useEffect(()=>{
  fetch("https://restcountries.com/v3.1/all").then((result)=>{
    result.json().then((resp)=>{
      console.warn("result",resp);
  setData(resp)
    })
  })
 },[])
 console.warn(data)
  return (
    <div className="App">
      <h1>Get API Call</h1>
      <table border="1">
        <tr>
     <td>countryName</td>
     <td>captail</td>
     <td>population</td>
        </tr>
        {
          data.map((item)=>
          <tr>
          <td>{item.region}</td>
          <td>{item.capital}</td>
          <td>{item.population}</td>
             </tr>
          )
        }
      </table>
    </div>
    
    
  );
}
