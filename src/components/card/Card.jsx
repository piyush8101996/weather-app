import style from "./Card.module.css"
const Card = (props) => {
      
    return (
        <>
            {!props.data && (
                <p>No data found</p>
            )}
            {props.data && (
                <>   
                  
                  <h3><i className="fa-solid fa-city"></i><span className={style.city}>{props.searchvalue}</span></h3>
                    <h3 className={style.date}>
                        {props.day},{props.date}{props.month},{props.year}
                    </h3>
                    <div className={style.hum}>
                        <h3><i className="fa-solid fa-cloud" ></i> <span>{props.data.humidity}</span></h3>
                        <h3>{(props.data.temp - 273).toFixed(2)}<span>°C</span></h3>
                    </div>
  
                </>

            )}
        </>
    )
}
export default Card;