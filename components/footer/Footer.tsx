const Footer = () => {
  return (
    <footer className="bg-pink-300 w-full py-2">
      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        <p>Developed By Wunna Aung</p>
        <small>
          Contact me on{" "}
          <a
            className="underline text-blue-700 font-semibold"
            href="https://www.linkedin.com/in/wunna-aung-256116227/"
          >
            LinkedIn
          </a>
        </small>
      </div>
    </footer>
  );
};

export default Footer;
