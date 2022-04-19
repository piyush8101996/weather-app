import { useEffect, useState } from "react";
import Card from "../card/Card";
import style from "./Weatherapp.module.css"
const Weather = () => {
     const [search,setSearch] =useState(" ")
     const [data,setData]=useState();



     const searchHandler=(e)=>{
        setSearch(e.target.value)
     }

     useEffect(()=>{
         fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=da33e8543cfa0aa2f2235f2380bd3e22`)
         .then((res)=>res.json())
         .then((data)=>{
             setData(data.main)
             console.log(data.main)
         })
     },[search])


       //Current date day time
       const days=["sunday","monday","Tuesday","wednesday","Thrusday","Friday","Saturday"]
       const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
       const d = new Date();
       const date=d.getDate()
       const day= days[d.getDay()];
       const month= months[d.getMonth()];
       const year =d.getFullYear();
     
    return (
        <>  
         
            <div className={style.container}>
                <div>
                    <h1>Weather App</h1>
                    <input type="text" value={search} onChange={searchHandler}  placeholder="city name" />
                </div>
                <div className={style.card}>
                <Card searchvalue={search} day={day} date={date} month={month} year={year} data={data} /> 
                </div>
            
            </div>

        </>
    )
}
export default Weather;