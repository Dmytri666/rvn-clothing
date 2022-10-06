import { useNavigate } from "react-router-dom";
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
  Header,
  Paragraph,
} from "./directory-item.style";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);
  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <Header>{title}</Header>
        <Paragraph>Shop now</Paragraph>
      </Body>
    </DirectoryItemContainer>
  );
};
export default DirectoryItem;
