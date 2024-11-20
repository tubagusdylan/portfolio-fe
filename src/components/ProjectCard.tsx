import { FC } from "react";

interface ProjectCardProp {
  src: string;
  title: string;
  children: string;
  href: string;
}

const ProjectCard: FC<ProjectCardProp> = ({ src, title, children, href }) => {
  return (
    <div className="w-full lg:w-project-card p-4">
      <a href={href} target="_blank">
        <img src={src} alt={title} className="aspect-video rounded-2xl" />
      </a>
      <h2 className="text-lg font-semibold text-orange my-3">{title}</h2>
      <p>{children}</p>
    </div>
  );
};

export default ProjectCard;
