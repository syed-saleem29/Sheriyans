import React from "react";
import githubData from "../../assets/github.json";
import MacWindows from "../windows/MacWindows";
import "./github.scss";

const Github = () => {
  const Gitcard = ({
    data = {
      id: 1,
      image: "",
      title: "",
      description: "",
      tags: [],
      repoLink: "",
      demoLink: "",
    },
  }) => {
    return (
      <div className="card">
        <div className="content">
          <img src={data.image} alt="" />
          <div className="data-container">
            <h1>{data.title}</h1>
            <p className="description">{data.description}</p>
            <div className="tags">
              {data.tags.map((tag) => (
                <p className="tag">{tag}</p>
              ))}
            </div>
            <div className="urls">
              <a target="_blank" href={data.repoLink}><img src="/doc-icons/github.svg" alt="" />Repositoy</a>
              {data.demoLink && <a  href={data.demoLink}>Demo link</a>}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <MacWindows>
      <div className="cards">
        {githubData.map((project) => {
          return <Gitcard data={project} />;
        })}
      </div>
    </MacWindows>
  );
};

export default Github;
