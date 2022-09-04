import { useState,useEffect } from "react";
import MeetupList from "../components/meetups/meetuplist";
//const DumData = [
//   {
//       id: 'r1',
//       title: 'THE 400s',
//      image:'https://photos.worldsbk.com/2017/11/07/hi_18ex400g_201gn2alfh00d_a_full.jpg',
//       address:'Sepang-Malaysia',
//      description:'The kawasaki 400cc category motocomp.'

//   },
//  {
////     id: 'r2',
//     title: 'THE BIG BOYS',
///      image:'https://wallpaperaccess.com/full/3548495.jpg',
//     address:'Carmona-Philipines',
//     description:'The kawasaki litre-class category motocomp.' 
//  }  
//];
function RacerMeets() {
    const [isLoading, setisLoading] = useState(true);
    const [loadedRaces, setloadedRaces] = useState([]);
    useEffect(() => {

        setisLoading(true);
        fetch('https://kawasaki-first-project-default-rtdb.firebaseio.com/newraces.json')
            .then(response => {
                return response.json();
            }).then((data) => {
                const meetop = [];
                for(const key in data) {
                    const meetup = {
                    id: key,
                    ...data[key]

                };
                
                meetop.push(meetup);
            }

                setisLoading(false);
                setloadedRaces(meetop);

            });
    }, []);
    if (isLoading) {
        return (
            <section>
                <p>Loading.....</p>
            </section>
        );
    }
    return (<section>
        <MeetupList meetop={loadedRaces} />
    </section>);
}
export default RacerMeets;