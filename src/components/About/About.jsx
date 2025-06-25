import { useState } from "react";

export const About = () => {
  const [bugReport, setBugReport] = useState("");
  return (
    <div>
      <h1>About</h1>
      <p>A project for managing skirmish and RPG resources.</p>
      <p>
        Frequently asked questions can be found <a href="/about">here</a>.
      </p>
      <p>
        Frequently asked questions can be found{" "}
        <a href="/abouthttps://github.com/aneylon/HiveMind-Two">here</a>.
      </p>
      <h2>Bug Report : </h2>
      <textarea
        name="bugReport"
        id="bugReport"
        onChange={(e) => setBugReport(e.target.value)}
        value={bugReport}
      ></textarea>
      <div>
        <div>
          <button
            onClick={() => {
              console.log("Submit the bug", bugReport);
              setBugReport("");
            }}
          >
            Submit Bug
          </button>
        </div>
      </div>
    </div>
  );
};
