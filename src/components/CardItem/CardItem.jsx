import { StyledCardItem } from './CardItem.styled';

export const CardItem = ({ title, imageSrc, price, badgeTitle }) => {
  return (
    <StyledCardItem>
      <div className='card-image'>
        <img src={imageSrc} alt='' />

        {badgeTitle && <div className='badge'>{badgeTitle}</div>}
      </div>

      <footer>
        <h3 className='card-title'>{title}</h3>

        <p className='card-price'>{price}</p>
      </footer>
    </StyledCardItem>
  );
};