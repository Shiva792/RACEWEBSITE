import Ucard from '../Ui/ucard';
import classes from './meetupitem.module.css';
function MeetupItem(props) {
    return <li className={classes.item}>
        <Ucard>
            <div className={classes.image}>
                <img src={props.image} alt={props.title} />
            </div>
            <div className={classes.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div className={classes.actions}>
                <button>To Favorites</button>
            </div>
        </Ucard>
    </li>

}
export default MeetupItem;