import React from "react";

const CommentList = ({ comments = [] }) => {
  if (!comments.length) {
    return <h3>No Comments Yet</h3>;
  }

  return (
    <div class="ui comments">
      <h3 className="p-5" style={{ borderBottom: "1px dotted #1a1a1a" }}>
        Comments
      </h3>
      <div class="comment">
        {comments &&
          comments.map((comment) => (
            <div key={comment._id} class="content">
              <div>
                <h5>
                  {comment.commentAuthor} commented{" "}
                  <span style={{ fontSize: "0.825rem" }}>
                    on {comment.createdAt}
                  </span>
                </h5>
                <p>{comment.commentText}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CommentList;
