import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <h3 className="team">Team Burton</h3>
        <p>Hackathon November 2021</p>
        <h4 className="llm">LLM</h4>
        <p>Created by{' '}
          <a href="https://github.com/amandine-ctns" className="github-links">Amandine</a>,{' '}
          <a href="https://github.com/bast44trl" className="github-links">Bastien</a>,{' '}
          <a href="https://github.com/Kelhann2608" className="github-links">Bernardin</a>,{' '}
          <a href="https://github.com/ChleaBourtoule" className="github-links">Chléa</a>,{' '}
          <a href="https://github.com/Louya64" className="github-links">Emilie</a>,{' '}
          <a href="https://github.com/Just4Joy" className="github-links">Laurent</a></p>
    </div>
  );
};

export default Footer;
