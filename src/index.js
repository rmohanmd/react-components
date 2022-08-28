import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import { faker } from "@faker-js/faker";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Today at 2:00PM"
        message="Test 123"
        avatarPoster={faker.image.avatar()}
      />
      <CommentDetail
        author="Alex"
        timeAgo="Today at 11:25AM"
        message="Love the design"
        avatarPoster={faker.image.avatar()}
      />
      <CommentDetail
        author="Jane"
        timeAgo="Yesterday at 7:00PM"
        message="This is great!"
        avatarPoster={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
