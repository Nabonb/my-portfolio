const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-200 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3">
        <div className="social-icon text-center relative group">
          <a
            target="_blank"
            href="https://github.com/Nabonb"
            className="w-1/2 h-1/2"
          >
            <img
              src="/assets/github.svg"
              alt="github"
              className="w-full h-full"
            />
          </a>
          <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-black text-white text-sm font-medium px-3 py-1 rounded-lg shadow-lg transition-all duration-300 ease-in-out scale-90 group-hover:scale-100">
            Visit GitHub
          </span>
        </div>
        <div className="social-icon text-center relative group">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/prathambarua/"
            className="w-1/2 h-1/2"
          >
            <img src="/assets/linkedin.svg" alt="linkedin" />
          </a>
          <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-black text-white text-sm font-medium px-3 py-1 rounded-lg shadow-lg transition-all duration-300 ease-in-out scale-90 group-hover:scale-100">
            Visit Linkedin
          </span>
        </div>
        <div className="social-icon text-center relative group">
          <a
            target="_blank"
            href="https://leetcode.com/u/Nabonb/"
            className="w-1/2 h-1/2"
          >
            <img src="/assets/leetcode.svg" alt="leetcode" />
          </a>
          <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-black text-white text-sm font-medium px-3 py-1 rounded-lg shadow-lg transition-all duration-300 ease-in-out scale-90 group-hover:scale-100">
            Visit LeetCode
          </span>
        </div>
      </div>
      <p className="text-white-500">
        © 2024 Pratham Barua Nabo. All rights reserved.
      </p>
    </section>
  );
};

export default Footer;
