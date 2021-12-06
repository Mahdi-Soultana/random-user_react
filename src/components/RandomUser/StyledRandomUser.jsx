import styled from "styled-components";
export const StyledRandomUser = styled.section`
  border-radius: 0.9em;
  overflow: hidden;
  width: 70%;
  max-width: 950px;
  margin: auto;
  background-color: #f7f6e5;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 1);
  margin-top: 12vh;
  padding: 1rem;
  height: 540px;
  position: relative;
  .img-container {
    width: 250px;
    height: 250px;
    position: relative;
    z-index: 2;
    border-radius: 50%;
    margin: auto;
    padding: 0.5rem;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
    overflow: hidden;
    background-color: white;
    > img {
      width: 100%;
      border-radius: 50%;
      height: 100%;
      object-fit: cover;
      display: block;
      backface-visibility: hidden;
    }
  }
  svg,
  path {
    pointer-events: none;
  }
  .active {
    padding: 1rem;
    background-color: #cbfdfd;
  }
  .back-img {
    position: absolute;
    width: 100%;
    height: 150px;
    background-color: #a4e2ff9d;
    top: 0;
    left: 0;
  }
  .info,
  .action-container {
    margin: auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 80%;
    align-items: center;
    button {
      width: auto;
    }
  }
  .info {
    flex-direction: column;
  }
  button:hover {
    background-color: #68a9c79d;
  }
  button {
    padding: 0.5rem;
    width: 100%;
    display: inline-block;
    cursor: pointer;
  }
  .rnd-user-btn {
    width: 60%;
    max-width: 400px;
    margin: 2rem auto;
    text-align: center;
    padding: 1rem 2rem;
    &:disabled {
      opacity: 0.9;
    }
  }
  h1 {
    margin: 0;
    font-size: 2rem;
    margin-bottom: 1.5rem;
    text-transform: capitalize;
  }
  h2 {
    text-transform: capitalize;
    margin: 0;
    margin-top: 1rem;
    font-size: 1.3rem;
    font-weight: 400;
  }
  text-align: center;
`;
