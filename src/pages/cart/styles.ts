import styled from 'styled-components'

export const Container = styled.div`
  padding: 2rem;
  text-align: center;

  .header {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
  }

  .header div {
    flex: 1;
    text-align: center;
    font-size: 1rem;
    font-weight: bold;
    padding-bottom: 0.5rem;
    text-transform: uppercase;
    border-bottom: 2px solid black;
    margin-bottom: 2rem;
  }

  .body {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    margin-bottom: 1rem;
  }
  .body > * {
    flex: 1;
  }
  .image {
    width: 100px;
  }
  .buttons > * {
    width: 25px;
    height: 30px;
    background-color: black;
    color: white;
    border: none;
    margin: 0.5rem;
    font-size: 1rem;
    cursor: pointer;
  }
`
