import classes from './card.module.css'
function Ucard(props) {
return <div className={classes.card}>{props.children}</div>
}

export default Ucard;