import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1rem;
  /* background-color: lightgray; */
  /* 테마 사용해보기 */
  background-color: ${props => props.theme.pink};

  &:hover {
    background-color: ${props => props.theme.teal};
    transition: 0.5s;
  }
`;

const Block = styled.div`
  padding: ${props => props.padding};
  border: 1px solid black;
  border-radius: 1rem;
  background-color: ${props => props.backgroundColor};
  color: white;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  &:hover {
    background-color: ${props => props.theme.purple};
    width: 200px;
    transition: 1s;
  }

  & + & {
    margin-left: 20px;
  }
  
`;

const blockItems = [
  {
    label: '1',
    label1: 'red',
    padding: '1rem',
    backgroundColor: 'red',
  },
  {
    label: '2',
    label1: 'green',
    padding: '3rem',
    backgroundColor: 'green',
  },
  {
    label: '3',
    label1: 'blue',
    padding: '2rem',
    backgroundColor: 'blue',
  },
  {
    label: '4',
    label1: 'purple',
    padding: '2rem',
    backgroundColor: 'purple',
  },
];

function Blocks(props) {
  return (
    <Wrapper>
      {blockItems.map((blockItem) => {
        return (
          <Block
            key={blockItem.label}
            padding={blockItem.padding}
            backgroundColor={blockItem.backgroundColor}
          >
            {blockItem.label1}
          </Block>
        );
      })}
    </Wrapper>
  )
};

export default Blocks;