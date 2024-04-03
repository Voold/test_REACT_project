import "./CostFilter.css";

const CostFilter = (props) => {



    const ChangeYearHandler = (event) => {
        event.preventDefault();
        props.onSelectNewYear(event.target.value);
    }

    return(
        <div>
            <div class="year_selector">
                <div class="name_year_selector"><h1>Выбор по году</h1></div>
                <div class="year_list">
                    <select class="year_selector_list" onChange={ChangeYearHandler} value={props.year}>
                        <option value='2019'>2019</option>
                        <option value='2020'>2020</option>
                        <option value='2021'>2021</option>
                        <option value='2022'>2022</option>
                        <option value='2023'>2023</option>
                        <option value='2024'>2024</option>
                    </select>
                </div>
            </div>
            <div class="year_stat">
                <div class="month_stat">
                    <div class="column">
                        <div class="column_value 10"></div>
                    </div>
                    <h6>Jan</h6>
                </div>
                <div class="month_stat">
                    <div class="column">
                        <div class="column_value"></div>
                    </div>
                    <h6>Feb</h6>
                </div>
                <div class="month_stat">
                    <div class="column">
                    <div class="column_value v10"></div>
                    </div>
                    <h6>Mar</h6>
                </div>
                <div class="month_stat">
                    <div class="column">
                    <div class="column_value"></div>
                    </div>
                    <h6>Apr</h6>
                </div>
                <div class="month_stat">
                    <div class="column">
                        <div class="column_value"></div>
                    </div>
                    <h6>May</h6>
                </div>
                <div class="month_stat"><div class="column"><div class="column_value"></div></div><h6>Jun</h6></div>
                <div class="month_stat"><div class="column"><div class="column_value"></div></div><h6>Jul</h6></div>
                <div class="month_stat"><div class="column"><div class="column_value"></div></div><h6>Aug</h6></div>
                <div class="month_stat"><div class="column"><div class="column_value"></div></div><h6>Sep</h6></div>
                <div class="month_stat"><div class="column"><div class="column_value"></div></div><h6>Oct</h6></div>
                <div class="month_stat"><div class="column"><div class="column_value"></div></div><h6>Nov</h6></div>
                <div class="month_stat"><div class="column"><div class="column_value"></div></div><h6>Dec</h6></div>
            </div>
        </div>
    )
}

export default CostFilter

