import "./CostFilter.css";

const CostFilter = () => {
    return(
        <div>
            <div class="year_selector">
                <div class="name_year_selector"><h1>Выбор по году</h1></div>
                <div class="year_list">
                    <select class="year_selector_list">
                        <option>2019</option>
                        <option>2020</option>
                        <option>2021</option>
                        <option>2022</option>
                        <option>2023</option>
                        <option>2024</option>
                    </select>
                </div>
            </div>
            <div class="year_stat">
                <div class="month_stat"></div>
                <div class="month_stat"></div>
                <div class="month_stat"></div>
                <div class="month_stat"></div>
                <div class="month_stat"></div>
                <div class="month_stat"></div>
                <div class="month_stat"></div>
                <div class="month_stat"></div>
                <div class="month_stat"></div>
                <div class="month_stat"></div>
                <div class="month_stat"></div>
                <div class="month_stat"></div>
            </div>
        </div>
    )
}

export default CostFilter

