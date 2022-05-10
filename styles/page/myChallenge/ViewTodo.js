import styled from 'styled-components/native';

const ViewTodo = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color:white;
  height: auto;
  width: 100%;
  border-left-width: 10px;
  border-left-color: ${(props) => props.inputColor || 'black'};
  border-bottom-color: gray;
  margin-bottom: 10px;
  padding-left: 5px;
`;

export default ViewTodo;
