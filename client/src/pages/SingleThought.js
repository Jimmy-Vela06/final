import React from "react";

// Import the `useParams()` hook
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import CommentList from "../components/CommentList";
import CommentForm from "../components/CommentForm";

import { QUERY_SINGLE_THOUGHT } from "../utils/queries";
import { Button } from "semantic-ui-react";

const SingleThought = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { thoughtId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_THOUGHT, {
    // pass URL parameter
    variables: { thoughtId: thoughtId },
  });

  const thought = data?.thought || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div class="ui card" style={{ maxWidth: 1000 }}>
      <div class="content">
        <h3 class="header">
          {thought.thoughtAuthor} <br />
          <span style={{ fontSize: "1rem" }}>
            had this thought on {thought.createdAt}
          </span>
        </h3>
        <div className="">
          <blockquote
            className=""
            style={{
              fontSize: "1rem",
              fontStyle: "",

              lineHeight: "1.5",
            }}
          >
            {thought.thoughtText}
          </blockquote>
        </div>

        <div className="my-5 p-20">
          <CommentList comments={thought.comments} />
        </div>
        <div className="m-3 p-4" style={{ border: "1px dotted #1a1a1a" }}>
          <CommentForm thoughtId={thought._id} />
        </div>
      </div>
    </div>
  );
};

export default SingleThought;
