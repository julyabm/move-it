import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import style from '../styles/components/CompletedChallenges.module.css';

export function CompletedChallenges() {
    const {challengesCompleted} = useContext(ChallengesContext)

    return (
        <div className={style.CompletedChallengesContainer}>
            <span>Desafios Completos</span>
            <span>{challengesCompleted}</span>
        </div>
    );
}