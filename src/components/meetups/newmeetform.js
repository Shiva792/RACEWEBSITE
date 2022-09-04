import Ucard from '../Ui/ucard';
import classes from './newmeetupform.module.css';
import { useRef } from 'react';
function NewMeetForm(props) {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function Submitu(event) {
        event.preventDefault();
        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;
        const meetupdata = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription
        };

        props.onAddRace(meetupdata);
    }
    return (
    <Ucard>
        <form className={classes.form} onSubmit={Submitu}>
                <div className={classes.control}>
                    <label htmlFor='title'>Race Title</label>
                    <input type="text" required id="title" ref={titleInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='image'>Race Visual</label>
                    <input type="url" required id="image" ref={imageInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='address'>Race Venue</label>
                    <input type="text" required id="address" ref={addressInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>Race Description</label>
                    <textarea id="description" required rows='5' ref={descriptionInputRef}></textarea>
                </div>
                <div className={classes.actions}>
                    <button>ADD RACEDAY</button>
                </div>
            </form>
        </Ucard>
    );
}

export default NewMeetForm;