const CostDate = props => {
    const month = props.date.toLocaleString('ru-RU',{month: "long"});
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('ru-RU',{day: "2-digit"});

    return(
        <div className={props.name}>
            <div className="date-month">{month}</div>
            <div className="date-year">{year}</div>
            <div className="date-day">{day}</div>
        </div>
    )
}

export default CostDate