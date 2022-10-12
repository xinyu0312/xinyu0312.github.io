import React, { useState } from "react";
import "./experiences.css";
import {
  Droplet,
  OrbAmazon,
  OrbTencent,
  OrbTorchStar,
  OrbZoom,
} from "./asset_import";

// TODO: load from json file?
const titles = [
  "Amazon.com, Inc.",
  "Zoom Video Communications, Inc.",
  "Tencent Computer Systems Co. Ltd.",
  "TorchStar Corp.",
];
const positions = [
  "Software Development Engineer Intern",
  "Backend Software Engineer Intern",
  "Android Testing Developer Intern",
  "Software Engineer Intern",
];
const descriptions = [
  [
    <li key={"1"}>
      Created stream-based AWS business intelligence (BI) pipeline, allowing
      services to send real-time metrics to the data team
    </li>,
    <li key={"2"}>
      Migrated various Alexa services to the new BI pipeline, shortened their BI
      data delivery time from 1 day to 5 minutes
    </li>,
    <li key={"3"}>
      Automated per-service pipeline creation with AWS CDK, eliminating human
      error and reducing deployment time by 400%
    </li>,
  ],
  [
    <li key={"1"}>
      Developed a notification-relay server that monitors Zoom services and
      provides real-time feedback on potential problems
    </li>,
    <li key={"2"}>
      Supported the creation of custom filtering & aggregation rules for
      subscriptions, reducing total notifications by over 80%
    </li>,
    <li key={"3"}>
      Analyzed received data and created reports based on problem trends,
      allowing preemptive error detection and prevention
    </li>,
  ],
  [
    <li key={"1"}>
      Participated in the development of testing framework for the WeSee Android
      app, reducing the need for manual testing
    </li>,
    <li key={"2"}>
      Learned how to use testing frameworks such as Espresso and utilized them
      to write simpler, yet more effective test cases
    </li>,
    <li key={"3"}>
      Improved the scope and efficiency of existing tests cases, increasing
      coverage rate to 85% and decreasing testing duration
    </li>,
  ],
  [
    <li key={"1"}>
      Developed a dedicated SQL product database and its access client, allowing
      hassle-free querying and editing of products
    </li>,
    <li key={"2"}>
      Automated manual database-related tasks using predefined database scripts,
      improving efficiency of warehouse operations
    </li>,
    <li key={"3"}>
      Programmed a series of data-analysis tools using Excel, allowed the
      analysis of discrepancies caused by manual mistakes
    </li>,
  ],
];

const orbs = [OrbAmazon, OrbZoom, OrbTencent, OrbTorchStar];
const timings = [
  "05 - 08.2022",
  "06 - 08.2021",
  "06 - 08.2019",
  "06 - 09.2018",
];

const OrbOrDroplet = ({ target, index }) => {
  if (target !== index) {
    return (
      <div>
        <img src={orbs[index]} alt={"company"} />
      </div>
    );
  }
  return (
    <div className={"experiences-droplet-container"}>
      <div className={"experiences-droplet-overlay"}>
        <img src={Droplet} alt={"droplet"} />
      </div>
      <div className={"experiences-droplet-orb"}>
        <img src={orbs[index]} alt={"company"} />
      </div>
    </div>
  );
};

const Experiences = () => {
  const [index, setIndex] = useState(0);

  const orbs = [];
  for (let a = 0; a < 4; a++) {
    orbs.push(
      <div className={"experiences-orb-wrapper"} key={"orb_" + a}>
        {
          // Conditional render the time stamp
          index === a && (
            <div className={"experiences-orb-time"}>
              <h2>{timings[a]}</h2>
            </div>
          )
        }
        <div className={"experiences-orb-icon"} onClick={() => setIndex(a)}>
          <OrbOrDroplet target={index} index={a} />
        </div>
      </div>
    );
  }

  return (
    <div className={"experiences"} id={"experiences"}>
      <div className={"experiences-container"}>
        <div className={"experiences-content"}>
          <h1>Experiences</h1>
          <div className={"divider"} />
          <div className={"experiences-details"}>
            <h1>{titles[index]}</h1>
            <h2>{positions[index]}</h2>
            <ul>{descriptions[index]}</ul>
          </div>
        </div>

        <div className={"experiences-timeline"}>
          <div className={"experiences-wrapper"}>
            <div className={"experiences-bar"} />
            <div className={"experiences-orbs"}>{orbs}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
