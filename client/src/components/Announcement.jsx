import styledComponents from "styled-components";

const Container = styledComponents.div`
  height: 30px;
  background-color: #008080;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: normal;
  position: relative;
`;

const Announcement = () => {
  return (
    <Container>
        15 June. Mid-June sale. Freeship on orders over $50. Buy now!!!
    </Container>
  )
}

export default Announcement;