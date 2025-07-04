// import { Box, Card, TextField, Typography } from "@mui/material";
import { useState } from "react";
export const Terminal = () => {
  const [textToConvert, setTextToConvert] = useState("");
  return (
    <div>
      <h3>Retro Terminal</h3>
      <div>
        <textarea
          variant="standard"
          sx={{
            width: 800,
            minHeight: 600,
            margin: 2,
            padding: 2,
            textArea: {
              color: "lightgreen",
              textShadow: "0 0 6px lightgreen",
              fontFamily: "VT323, monospace",
              fontSize: ".5em",
              borderBottom: "",
            },
            backgroundColor: "black",
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(0,0,0,0.15), rgba(0,0,0,0.15) 1px, rgba(255,255,255,0.15) 1px, rgba(255,255,255,0.15) 2px), radial-gradient(rgba(0, 150, 0, 0.66), black 120%)",
          }}
          multiline
          minRows={10}
          placeholder="> awaiting input ..."
          onChange={(event) => {
            let text = event.target.value;
            // TODO: figure out how to convert text correctly.
            setTextToConvert(text);
          }}
          InputProps={{ disableUnderline: true, spellCheck: false }}
        />
      </div>
      <div
        style={{
          width: 350,
          position: "relative",
          margin: 3,
          padding: 3,
          color: "lightgreen",
          backgroundColor: "black",
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(0,0,0,0.15), rgba(0,0,0,0.15) 1px, rgba(255,255,255,0.15) 1px, rgba(255,255,255,0.15) 2px), radial-gradient(rgba(0, 150, 0, 0.66), black 120%)",
          fontFamily: "VT323, monospace",
          fontWeight: "bold",
          fontSize: "1em",
          textShadow: "0 0 6px lightgreen",
          minWidth: 450,
          minHeight: 450,
        }}
      >
        <p style={{ fontFamily: "VT323, monospace" }}>{textToConvert}</p>
      </div>
    </div>
    // </div>
  );
};
