import { StyledCardItem, Wrapper, Details, Image, Badge, Title, Price } from './CardItem.styled';

export const CardItem = ({ href, image, badgeTitle, title, price }) => {
  return (
    <StyledCardItem href={href}>
      <article>
        <Wrapper>
          <Image src={image} alt='' />

          {badgeTitle && <Badge className='body-small'>{badgeTitle}</Badge>}
        </Wrapper>

        <Details className='heading-3'>
          <Title>{title}</Title>
          <Price>{price}</Price>
        </Details>
      </article>
    </StyledCardItem>
  );
};