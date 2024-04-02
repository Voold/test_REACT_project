import "./MainCont.css";

const MainCont = props => {
    const classes = 'MainCont ' + props.className;
    return (
        <div className={classes}>
            {props.children}
        </div>
    )
}

export default MainCont;