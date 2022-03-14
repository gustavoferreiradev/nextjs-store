import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 1rem;
  margin-bottom: 2.5rem;

  .title {
    font-size: 0.5rem;
    font-weight: 600;
  }

  .category {
    font-size: 0.8rem;
    text-transform: uppercase;
  }

  .button {
    width: 100%;
    margin-top: 0.5rem;
    padding: 0.75rem 0;
    background: transparent;
    text-transform: uppercase;
    border: 2px solid black;
    cursor: pointer;
  }

  .button:hover {
    background: black;
    color: white;
  }
`

export const Title = styled.h2`
  font-size: 1rem;
  font-weight: 600;
  max-width: 10rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
