import { IoLogoGithub } from "react-icons/io";

export const Footer = () => {
  return (
    <footer className="flex justify-end items-center bg-[#141414] w-full h-10 p-2 bottom-0">
      <div>
        <a
          className="flex items-center text-white gap-2"
          target="_blank"
          href="https://github.com/juansebastianwebdev"
        >
          <IoLogoGithub size={20} />
          juansebastianwebdev
        </a>
      </div>
    </footer>
  );
};
