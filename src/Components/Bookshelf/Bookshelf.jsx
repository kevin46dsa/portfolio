import React from "react";
import GoodreadsBookshelf from "react-goodreads-shelf";
import Container from "react-bootstrap/Container";
import "./Bookshelf.css";

export default function Bookshelf() {
  return (
    <div className="bookshelf-page">
      <Container>
        <h1 className="bookshelf-title">My Bookshelf</h1>

        <section className="shelf">
          <h2 className="shelf-title">Finished</h2>
          <div className="shelf-grid">
            <GoodreadsBookshelf shelf="read" userId="164565714" />
          </div>
        </section>

        <section className="shelf">
          <h2 className="shelf-title">To Read</h2>
          <div className="shelf-grid">
            <GoodreadsBookshelf shelf="to-read" userId="164565714" />
          </div>
        </section>

        <section className="shelf">
          <h2 className="shelf-title">Currently Reading</h2>
          <div className="shelf-grid">
            <GoodreadsBookshelf shelf="currently-reading" userId="164565714" />
          </div>
        </section>
      </Container>
    </div>
  );
}
