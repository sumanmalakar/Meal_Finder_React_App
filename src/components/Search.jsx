import styled from "styled-components";
import { useState } from "react";
// import {FaSearch} from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

export default function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };
  return (
    <>
      <FormStyle onSubmit={submitHandler}>
        <div>
          {/* <FaSearch></FaSearch>  */}
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            value={input}
            placeholder="type food & enter"
          />
          {/* <h1>{input}</h1> */}
        </div>
      </FormStyle>
    </>
  );
}

const FormStyle = styled.form`
  margin: 0rem 10rem;
  div {
    position: relative;
    width: 100%;
  }
  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 0.5rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(100%, -50%);
    color: white;
  }
`;
