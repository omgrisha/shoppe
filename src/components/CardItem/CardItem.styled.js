import styled from "styled-components";

const StyledCardItem = styled.div`
  min-width: 300px;
  width: 300px;

  transition: filter 0.15s ease-in;

  &:hover {
    filter: brightness(0.6);
  }

  .card-image {
    position: relative;
    cursor: pointer;

    .badge {
      position: absolute;
      top: 16px;
      left: 16px;
      padding: 2px 8px;
      background-color: brown;
      color: #fff;
      font-size: 12px;
      border-radius: 4px;
    }
  }

  img {
    max-width: 100%;
    object-fit: cover;
    border-radius: 8px;
  }

  footer {
    margin-top: 24px;
    font-size: 20px;
  }

  .card-title {
    margin-bottom: 16px;
    cursor: pointer;
  }

  .card-price {
    color: brown;

    &:before {
      content: "$";
      display: inline-block;
      margin-right: 0.5ch;
    }
  }
`;

export default StyledCardItem;