import styled from 'styled-components/native';

const ViewTodo = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${(props) => props.inputColor || 'white'};
  height: auto;
  width: 100%;
  border-left-width: 8px;
  border-left-color: black;
  border-bottom-color: gray;
  margin-bottom: 10px;
  padding-left: 5px;
  View {
    display: flex;
    flex-direction: row;
    align-items: center;
    Image {
      height: 50px;
      width: 50px;
    }
  }
`;

export default ViewTodo;
