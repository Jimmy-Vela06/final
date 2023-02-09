import React from "react";
import { useQuery } from "@apollo/client";

import ThoughtList from "../components/ThoughtList";
import ThoughtForm from "../components/ThoughtForm";

import { QUERY_THOUGHTS } from "../utils/queries";

const Home = () => {
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const thoughts = data?.thoughts || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: "1px dotted #1a1a1a" }}
        >
          <ThoughtForm />
        </div>

        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ThoughtList thoughts={thoughts} />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;

<div class="ui cards">
  <div class="ui card">
    <div class="content">
      <div class="header">Project Report - April</div>
      <div class="meta">ROI: 30%</div>
      <div class="description">
        Leverage agile frameworks to provide a robust synopsis for high level
        overviews.
      </div>
    </div>
  </div>
  <div class="ui card">
    <div class="content">
      <div class="header">Project Report - May</div>
      <div class="meta">ROI: 34%</div>
      <div class="description">
        Bring to the table win-win survival strategies to ensure proactive
        domination.
      </div>
    </div>
  </div>
  <div class="ui card">
    <div class="content">
      <div class="header">Project Report - June</div>
      <div class="meta">ROI: 27%</div>
      <div class="description">
        Capitalise on low hanging fruit to identify a ballpark value added
        activity to beta test.
      </div>
    </div>
  </div>
</div>;
