import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import style from '../styles/components/Profile.module.css';

export function Profile(){
    const{level} = useContext(ChallengesContext)

    return(
        <div className={style.profileContainer}>
            <img className={style.profileImage}src="https://github.com/julyabm.png" alt="Julya Brustolin"/>
            <div>
                <strong>Julya Brustolin Marssona</strong>
                <p>
                <img className={style.iconImage} src="icons/level.svg" alt="Level"/>
                Level {level}
                </p>
            </div>
        </div>
    );
}