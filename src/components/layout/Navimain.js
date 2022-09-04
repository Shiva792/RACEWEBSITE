import { Link } from 'react-router-dom';
import classes from './Navimain.module.css';
function NaviMain() {
    return (
    <header className={classes.header}>
        <div className={classes.logo}>KAWASAKI RACE TEAM</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>RacerMeets</Link>
                </li>
                <li>
                    <Link to='/favorites'>Favorites</Link>
                </li>
                <li>
                    <Link to='/newraces'>NewRaces</Link>
                </li>
            </ul>
        </nav>
    </header>
    );
}
export default NaviMain;