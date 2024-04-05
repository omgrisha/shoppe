import { StyledCardItem, Wrapper, Details, Image, Badge, Title, Price } from './CardItem.styled';

export const CardItem = ({ href, image, badgeTitle, title, price, width }) => {
  return (
    <StyledCardItem href={href} $width={width}>
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