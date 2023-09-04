import { useState } from "react";
//material ui
import { Button, Container, Paper } from "@mui/material";
//redux toolKit
import { useSelector } from "react-redux";
//toastify

function HomePage() {
  const { ticket } = useSelector((state) => state.userPass);
  const [message, setMessage] = useState("");

  const getData = () => {
    fetch("http://shserver.top:8080/test/users/getData", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${ticket}`,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        const code = json.result;
        const replacement = code.replace(
          /<i>h2 not Italic Text<\/i>/g,
          "&lt;i&gt;h2 not Italic Text&lt;/i&gt;"
        );
        setMessage(replacement);
      });
  };

  return (
    <Container
      maxWidth="sm"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Paper elevation={5} style={{ width: "100%" }}>
        <Button fullWidth onClick={() => getData()}>
          {message.length === 0 ? "Click me To Change TEXT" :"TEXT Changed"}
        </Button>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop:"1rem"
          }}
          dangerouslySetInnerHTML={{ __html: message.length === 0 ? "TEXT" :message}}
        >
          
        </div>
      </Paper>
    </Container>
  );
}

export default HomePage;
