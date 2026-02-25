import React from "react";
import "./dock.scss";

const Dock = ({ windowsState, setWindowsState }) => {
  return (
    <footer className="dock">
      <div
        onClick={() => {
          setWindowsState((state) => ({ ...state, github: !state.github }));
        }}
        className="icon github"
      >
        <img src="/doc-icons/github.svg" alt="" />
      </div>
      <div
        onClick={() => {
          setWindowsState((state) => ({ ...state, note: !state.note }));
        }}
        className="icon note"
      >
        <img src="/doc-icons/note.svg" alt="" />
      </div>
      <div
        onClick={() => {
          setWindowsState((state) => ({ ...state, resume: !state.resume }));
        }}
        className="icon pdf"
      >
        <img src="/doc-icons/pdf.svg" alt="" />
      </div>
      <div
        onClick={() => {
          window.open("https://calendar.google.com/", "_blank");
        }}
        className="icon calender"
      >
        <img src="/doc-icons/calender.svg" alt="" />
      </div>
      <div
        onClick={() => {
          setWindowsState((state) => ({ ...state, spotify: !state.spotify }));
        }}
        className="icon spotify"
      >
        <img src="/doc-icons/spotify.svg" alt="" />
      </div>
      <div
        onClick={() => {
          window.open("https://mail.google.com/", "_blank");
        }}
        className="icon mail"
      >
        <img src="/doc-icons/mail.svg" alt="" />
      </div>
      <div
        onClick={() => {
          window.open(
            "https://www.linkedin.com/in/syed-saleem-831925264/",
            "_blank",
          );
        }}
        className="icon link"
      >
        <img src="/doc-icons/link.svg" alt="" />
      </div>
      <div
        onClick={() => {
          setWindowsState((state) => ({ ...state, cli: !state.cli }));
        }}
        className="icon cli"
      >
        <img src="/doc-icons/cli.svg" alt="" />
      </div>
    </footer>
  );
};

export default Dock;
