import styled from "styled-components";

export const Body = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 30px;
  background-color: white;
  opacity: 0.7;
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;
export const Header = styled.h2`
  font-weight: bold;
  margin: 0 6px 0;
  font-size: 22px;
  color: #4a4a4a;
  text-transform: uppercase;
`;

export const BackgroundImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  &:hover {
    transform: scale(1.1);
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }
`;
export const Paragraph = styled.p`
  font-weight: lighter;
  font-size: 16px;
`;
export const DirectoryItemContainer = styled.div`
  border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  &:nth-child(-n + 3) {
    grid-column: span 2;
  }
  &:nth-child(n + 4) {
    grid-column: span 3;
  }
  &:hover {
    cursor: pointer;
    & ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${Body} {
      opacity: 0.9;
    }
  }
`;
