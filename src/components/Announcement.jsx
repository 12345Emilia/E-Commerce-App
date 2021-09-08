import styled from 'styled-components';

const Container = styled.div`
  height: 30px;
  background-color: #8dd0d0;
  border-bottom: 5px solid white;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;
const Announcement = () => {
  return <Container>Free Shipping on Orders Over $50!</Container>;
};

export default Announcement;
