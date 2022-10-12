import React from "react";
import "./projects.css";
import big_project_image from "../../assets/note_zart.png";
import github from "../../assets/icon_github_green.svg";
import external_link from "../../assets/icon_external_link.svg";

const titles = ["Note-zart Composer", "Minecraft DQN", "Discord API with NLP"];
const links_github = [
  "https://github.com/neoxchen/note-zart",
  "https://github.com/OneMelon8/Pufferfish",
  "https://github.com/OneMelon8/Zobot",
];
const links_external = [
  "https://drive.google.com/file/d/1bW9LZZ1Mu38bIFsymP5RojbkRbnwkhhH/view?usp=sharing",
  "https://youtu.be/xhJ0ePXZqFY",
  "",
];
const descriptions = [
  "An interesting area in which deep learning can play a role in exploring is the intersection of technology and arts. This project delves into the fundamental principles behind the development of machine creativity through applying deep learning techniques to generate music.",
  "Developed and trained a self-play enabled reinforcement learning Mineraft PvP agent using Microsoft Malmo. Utilized self-play to continuously improve the agent",
  "Developed an AI that can understand and respond to typed messages using natural language processing (NLP) technology. Implemented tokenizer and stemmer to preprocess messages",
];
const tags = [
  "RNN auto-encoder transformer maestro-3.0 MIDI",
  "python reinforcement-learning self-play",
  "natural-language-processing rest-api",
];

const ProjectTile = ({
  title,
  link_github,
  link_external,
  description,
  tags,
}) => {
  return (
    <div className={"projects-small"}>
      <div className={"projects-big-details-header"}>
        <h1>{title}</h1>
        <div className={"projects-details-header-icons"}>
          <a href={link_github} target="_blank" rel="noopener noreferrer">
            <img src={github} alt={"github"} />
          </a>
          {link_external && (
            <a href={link_external} target="_blank" rel="noopener noreferrer">
              <img src={external_link} alt={"external link"} />
            </a>
          )}
        </div>
      </div>

      <div className={"projects-small-details-content"}>
        <p>{description}</p>
      </div>
      <div className={"projects-big-details-tags"}>
        <p>{tags}</p>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className={"projects"} id={"projects"}>
      <div className={"projects-container"}>
        <div className={"projects-content"}>
          <h1>Projects</h1>
          <div className={"divider"} />
          <div className={"projects-big"}>
            <img src={big_project_image} alt={"project"} />
            <div className={"projects-big-details"}>
              <div className={"projects-big-details-header"}>
                <h1>{titles[0]}</h1>
                <div className={"projects-details-header-icons"}>
                  <a
                    href={links_github[0]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={github} alt={"github"} />
                  </a>
                  <a
                    href={links_external[0]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={external_link} alt={"linkedin"} />
                  </a>
                </div>
              </div>

              <div className={"projects-big-details-content"}>
                <p>{descriptions[0]}</p>
              </div>
              <div className={"projects-big-details-tags"}>
                <p>{tags[0]}</p>
              </div>
            </div>
          </div>

          <div className={"projects-tiles"}>
            <div className={"projects-small-wrapper"}>
              <ProjectTile
                title={titles[1]}
                description={descriptions[1]}
                link_github={links_github[1]}
                link_external={links_external[1]}
                tags={tags[1]}
              />
            </div>
            <div className={"projects-small-wrapper"}>
              <ProjectTile
                title={titles[2]}
                description={descriptions[2]}
                link_github={links_github[2]}
                link_external={links_external[2]}
                tags={tags[2]}
              />
            </div>
          </div>

          <div className={"projects-button"}>
            <div className={"projects-button-wrapper"}>
              {/* TODO: make archive page! */}
              <button onClick={() => console.log("owo")}>View Archive</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
