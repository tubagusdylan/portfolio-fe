import { FC } from "react";

interface SkillBoxProp {
  src: string;
  children: string;
}

const SkillBox: FC<SkillBoxProp> = ({ src, children }) => {
  return (
    <div className="p-4 shadow-lg rounded-md hover:shadow-orange hover:translate-y-2 transition-all duration-200 ease-in-out">
      <img src={src} alt={children} width={40} className="mx-auto mb-1" />
      <p className="font-medium text-sm text-center">{children}</p>
    </div>
  );
};

export default SkillBox;
