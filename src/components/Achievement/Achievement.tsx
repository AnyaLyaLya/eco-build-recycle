import { achievements } from "../../utils/achievements";

export const Achievement = () => {
  return (
    <div className='achievement' id="offers">
      <ul className='achievement__list'>
        {achievements.map(achievement => (
          <li className='achievement__item' key={achievement.title}>
            <h2 className='achievement__item--title'>
              {achievement.title}
            </h2>

            <p className='achievement__item--text'>
              {achievement.text}
            </p>
          </li>
        ))}  
      </ul>
    </div>
  );
};