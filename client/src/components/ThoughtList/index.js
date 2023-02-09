import React from "react";
import { Link } from "react-router-dom";

import { Button, Card, Rating } from "semantic-ui-react";

const ThoughtList = ({
  thoughts,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!thoughts.length) {
    return <h3>NO POSTS :/</h3>;
  }

  return (
    <Card.Group>
      {showTitle && <h3>{title}</h3>}
      {thoughts &&
        thoughts.map((thought) => (
          <Card key={thought._id} style={{ Width: 1000, marginTop: 50 }}>
            <Card.Content>
              <Card.Header>
                {showUsername ? (
                  <Link
                    className="text-dark"
                    to={`/profiles/${thought.thoughtAuthor}`}
                  >
                    {thought.thoughtAuthor} <br />
                    <span style={{ fontSize: "1rem" }}>
                      Posted: {thought.createdAt}
                    </span>
                  </Link>
                ) : (
                  <>
                    <span style={{ fontSize: "1rem" }}>
                      You poste on: {thought.createdAt}
                    </span>
                  </>
                )}
              </Card.Header>
              <Card.Description style={{ marginTop: 10 }}>
                <p>{thought.thoughtText}</p>
              </Card.Description>

              <Button
                style={{ cursor: "pointer", marginTop: 10 }}
                type="submit"
                fluid
              >
                <Link to={`/thoughts/${thought._id}`}>ENTER CHAT</Link>
              </Button>
              <div
                class="ui disabled rating"
                role="radiogroup"
                tabindex="0"
                style={{ marginTop: 10 }}
              >
                <i
                  tabindex="-1"
                  aria-checked="false"
                  aria-posinset="1"
                  aria-setsize="5"
                  class="active icon"
                  role="radio"
                ></i>
                <i
                  tabindex="-1"
                  aria-checked="false"
                  aria-posinset="2"
                  aria-setsize="5"
                  class="active icon"
                  role="radio"
                ></i>
                <i
                  tabindex="-1"
                  aria-checked="true"
                  aria-posinset="3"
                  aria-setsize="5"
                  class="active icon"
                  role="radio"
                ></i>
                <i
                  tabindex="-1"
                  aria-checked="false"
                  aria-posinset="4"
                  aria-setsize="5"
                  class="icon"
                  role="radio"
                ></i>
                <i
                  tabindex="-1"
                  aria-checked="false"
                  aria-posinset="5"
                  aria-setsize="5"
                  class="icon"
                  role="radio"
                ></i>
              </div>
            </Card.Content>
          </Card>
        ))}
    </Card.Group>
  );
};

export default ThoughtList;
