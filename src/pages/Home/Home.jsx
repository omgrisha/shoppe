import { StyledHome, Latest, Heading, ViewAll, Products } from './Home.styled';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { CardItem } from '../../components/CardItem';

import { products } from '../../data/products';

export const Home = () => {
  return (
    <StyledHome>
      <Header />
      <div className="container">
        <Latest>
          <header className='flex'>
            <Heading className='heading-1'>Shop The Latest</Heading>
            <ViewAll className='heading-4'><a href="#">View all</a></ViewAll>
          </header>
          <Products>
            {products.map((product, index) => (
              <CardItem
                key={index}
                href='#'
                image={product.image}
                title={product.title}
                price={product.price}
              />
            ))}
          </Products>
        </Latest>
      </div>

      <Footer />
    </StyledHome>
  );
};