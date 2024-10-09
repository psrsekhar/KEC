export default function About() {
  return (
    <div className="row container-fluid bg-light p-2 m-2">
      <h3 className="text-center">ABOUT ME</h3>
      <div class="col-3 text-center">
        <img src="react.svg" className="rounded" width="100" height="100" />
      </div>
      <div className="col-8">
        <p className="lh-base text-justify">
          Hello! I’m Sairam, a passionate web developer with a keen interest in
          modern web technologies like Vite and React. With a strong foundation
          in HTML, CSS, and JavaScript, I enjoy creating dynamic and responsive
          web applications that provide excellent user experiences.
        </p>
        <p className="lh-base text-justify">
          I have a particular interest in optimizing web performance and
          ensuring cross-browser compatibility. My recent projects include
          developing single-page applications (SPAs) and implementing input
          validation patterns to enhance form usability and security.
        </p>
      </div>
    </div>
  );
}
