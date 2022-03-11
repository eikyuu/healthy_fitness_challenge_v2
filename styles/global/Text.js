import styled from 'styled-components/native';

const Text = styled.Text`
  :color: ${(props) => props.inputColor || '#40916C'};
  font-size: 25px;
  font-weight: bold;
`;

export default Text;
