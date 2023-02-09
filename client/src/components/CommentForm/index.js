import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { ADD_COMMENT } from "../../utils/mutations";
import { Button } from "semantic-ui-react";

import Auth from "../../utils/auth";

const CommentForm = ({ thoughtId }) => {
  const [commentText, setCommentText] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

  const [addComment, { error }] = useMutation(ADD_COMMENT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addComment({
        variables: {
          thoughtId,
          commentText,
          commentAuthor: Auth.getProfile().data.username,
        },
      });

      setCommentText("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "commentText" && value.length <= 280) {
      setCommentText(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div class="ui form">
      <h4>Leave your comment</h4>

      {Auth.loggedIn() ? (
        <>
          <div class="field">
            <label
              className={`m-0 ${
                characterCount === 280 || error ? "text-danger" : ""
              }`}
            >
              Character Count: {characterCount}/280
              {error && <span className="ml-2">{error.message}</span>}
            </label>
            <form
              className="flex-row justify-center justify-space-between-md align-center"
              onSubmit={handleFormSubmit}
            >
              <textarea
                name="commentText"
                placeholder="Add your comment..."
                value={commentText}
                className="form-input w-100"
                style={{ lineHeight: "1.5", resize: "vertical" }}
                onChange={handleChange}
              ></textarea>

              <Button
                class="ui right floated button"
                type="submit"
                className="mt-2"
              >
                Add Comment
              </Button>
            </form>
          </div>
        </>
      ) : (
        <p>
          You need to be logged in to comment. <Link to="/login">login</Link> or{" "}
          <Link to="/signup">create an account.</Link>
        </p>
      )}
    </div>
  );
};

export default CommentForm;