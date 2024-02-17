import React from "react";
import { techStackDetails } from "../Details";
import { Tooltip } from "antd";

function Technologies() {
  const {
    html,
    css,
    js,
    react,
    redux,
    tailwind,
    bootstrap,
    sass,
    vscode,
    git,
    github,
    npm,
    postman,
    figma,
    php,
    nextjs,
    java,
    cypress,
    typescript,

  } = techStackDetails;
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Minhas Tecnologias
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Tecnologias nas quais possuo proficiência e estou em constante processo de aprimoramento
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <Tooltip title="HTML">
          <img src={html} alt="" />
        </Tooltip>
        <Tooltip title="CSS">
          <img src={css} alt="" />
        </Tooltip>
        <Tooltip title="JavaScript">
          <img src={js} style={{ width: 106 }} alt="" />
        </Tooltip>
        <Tooltip title="ReactJS">
          <img src={react} style={{ width: 106 }} alt="" />
        </Tooltip>
        <Tooltip title="PHP">
          <img src={php} style={{ width: 106 }} alt="" />
        </Tooltip>
        <Tooltip title="Cypress">
          <img src={cypress} style={{ width: 106 }} alt="" />
        </Tooltip>
        <Tooltip title="Typescript">
          <img src={typescript} style={{ width: 106 }} alt="" />
        </Tooltip>
        <Tooltip title="Java">
          <img src={java} style={{ width: 106 }} alt="" />
        </Tooltip>
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <Tooltip title="Visual Studio Code">
          <img src={vscode} alt="VScode" />
        </Tooltip>
        <Tooltip title="Git">
          <img src={git} alt="Git" />
        </Tooltip>
        <Tooltip title="Github">
          <img src={github} alt="Github" />
        </Tooltip>
        <Tooltip title="Figma">
          <img src={figma} alt="Figma" />
        </Tooltip>
        <Tooltip title="NPM">
          <img src={npm} alt="NPM" />
        </Tooltip>
        <Tooltip title="Postman">
          <img src={postman} alt="Postman" />
        </Tooltip>
      </section>
    </main>
  );
}

export default Technologies;
