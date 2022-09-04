
import MeetupItem from './meetupitem';
import classes from './meetuplist.module.css';
function MeetupList(props) {
return <ul className={classes.list}>
    {props.meetop.map(meetup => 
        <MeetupItem 
            key={meetup.id} 
            id={meetup.id}
            image={meetup.image}
            title={meetup.title}
            address={meetup.address}
            description={meetup.description}
        />
    )}
</ul>

}
    export default MeetupList;