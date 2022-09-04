import { useNavigate } from 'react-router-dom';
import classes from './newraces.module.css';
import NewMeetForm from "../components/meetups/newmeetform";
function NewRaces() {
    const navigate = useNavigate();

    function addRaceHandle(meetupData) {
        fetch('https://kawasaki-first-project-default-rtdb.firebaseio.com/newraces.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            navigate("/",{replace:true});
        });
    }
    return (
        <section>
            <h1 className={classes.text}>ADD NEW RACES</h1>
            <NewMeetForm onAddRace={addRaceHandle} />
        </section>
    );
}
export default NewRaces;