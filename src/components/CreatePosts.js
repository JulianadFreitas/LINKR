import styled from "styled-components";
import { useContext, useState } from "react";
import axios from "axios";

export default function MyPosts() {
  const [link, setLink] = useState("");
  const [text, setText] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const token = '732249a2-af53-4731-bd8f-4a7c79b3015a';

  function Submit(event) {
    event.preventDefault();
    if (link.length === 0) {
      alert("Percebemos que você não preencheu o link corretamente... Tente novamente ;)");
    } else {
      const body = {
        text,
	      link
      };

      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        },
      };

      const request = axios.post(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/posts",
        body,
        config
      );

      setIsDisabled(true);

      request.then((response) => {
         setIsDisabled(false);
         setLink("");
         setText("");
      });

      request.catch(() => {
        alert("Houve um erro ao publicar seu link");
        setIsDisabled(false);
      });
    }

  }

  return (
    <Post>
      <Photo>
        <img
          src='https://static1.purebreak.com.br/articles/4/96/74/4/@/380748--mulher-maravilha-3-ira-encerrar-histor-300x254-1.jpg'
          alt={"imageofuser"}
        />
      </Photo>
      
        <Form>
          <h1>O que você tem pra favoritar hoje?</h1>
          <Styledinput
            type='link'
            disabled={isDisabled? true : false}
            onChange={(e) => setLink(e.target.value)}
            value={link}
            placeholder='http://...'
            isDisabled={isDisabled}
            required></Styledinput>
          <StyledinputText
            type='text'
            disabled={isDisabled? true : false}
            onChange={(e) => setText(e.target.value)}
            value={text}
            placeholder='O que você tem a dizer sobre isso?'
            isDisabled={isDisabled}
            required></StyledinputText>
          <Button 
          isDisabled={isDisabled}
          onClick={
               isDisabled
                 ? ""
                 : 
                    (event) => Submit(event)
            }>
            <span> {isDisabled ? (
                "Publicando"
              ) : (
                "Publicar"
              )}</span>
          </Button>
        </Form>
    </Post>
  );
}

const Post = styled.div`
  width: 611px;
  height: 209px;
  background: #ffffff;
  font-family: "Lato", sans-serif;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  margin-top: 60px;
  padding: 15px;
  display: flex;
  position: relative;
  font-weight: 300;
  font-size: 23px;
  color: #707070;

  h1 {
    margin-bottom: 12px;
  }
`;

const Photo = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100px;
  background-size: cover;
  margin:5px 0px 0px 5px ;
  background-image: url("https://static1.purebreak.com.br/articles/4/96/74/4/@/380748--mulher-maravilha-3-ira-encerrar-histor-300x254-1.jpg");

  img {
    width: 50px;
    height: 50px;
    border-radius: 100px;
  }
`;
const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  margin-left: 70px;
  margin-top: 5px;
`;


const Styledinput = styled.input`
  width: 502px;
  height: 30px;
  font-family: "Lato", sans-serif;
  font-size: 15px;
  line-height: 18px;
  background: #efefef;
  border-radius: 5px;
  color: #707070;
  padding-left: 10px;
  border: none;
  outline-color: transparent;
  margin-bottom: 5px;
  font-weight: 300;
`;

const StyledinputText = styled.input`
  width: 502px;
  height: 66px;
  font-family: "Lato", sans-serif;
  font-size: 15px;
  line-height: 18px;
  background: #efefef;
  border-radius: 5px;
  color: #707070;
  padding-left: 10px;
  border: none;
  outline-color: transparent;
  margin-bottom: 10px;
  font-weight: 300;
  display: flex;
  justify-content: start;
`;

const Button = styled.button`
  position: absolute;
  width: 112px;
  height: 31px;
  left: 389px;
  top: 140px;
  background: #1877f2;
  border-radius: 5px;
  outline-color: transparent;
  line-height: 17px;
  color: #ffffff;
  margin-bottom: 10px;
  border: none;
  font-family: "Lato", sans-serif;
  font-weight: bold;
`;

