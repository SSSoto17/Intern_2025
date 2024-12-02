const Project = ({
  id,
  href,
  title,
  description,
  img,
  activeProject,
  setActiveProject,
}) => {
  return (
    <li
      onMouseEnter={() => {
        setActiveProject(id);
      }}
      className={`grid place-content-end h-36 lg:h-auto p-2 lg:p-8 md:flex-[0_10_25%] transition-[flex] duration-200 ease-in bg-cover bg-no-repeat cursor-pointer relative bg-[image:var(--bgImg)] bg-[20%] ${
        activeProject === id && "md:flex-[0_2_50%]"
      }`}
      style={{ "--bgImg": `url(${img})` }}
    >
      <article
        className={`${
          activeProject !== id && "md:opacity-0"
        } min-w-56 md:min-w-min max-w-72 grid gap-1 transition-all duration-150 ease-linear delay-100 flow-space bg-[rgba(255,253,253,0.8)] px-3 py-4 rounded-md text-[var(--blue-haze-900)]`}
      >
        <a
          href={href}
          className="font-bold text-xl text-[var(--blue-haze-700)] md:hidden after:absolute after:inset-0"
        >
          <h2 className="">
            {id}{" "}
            <span className="text-base font-semibold transition-opacity duration-150 text-[var(--clr-text-heading)">
              {title}
            </span>
          </h2>
        </a>
        <p className="hidden md:block font-medium">{description}</p>
        <a
          href={href}
          className="hidden md:block uppercase font-semibold text-xl place-self-end hover:scale-110 transition-[transform] duration-150 after:absolute after:inset-0"
        >
          Go to site
        </a>
      </article>
    </li>
  );
};

export default Project;
