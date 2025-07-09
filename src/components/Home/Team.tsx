import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Title } from "../Title";
import { allTeamMembers } from "../../config";

const Team = () => {
  return (
    <div id="team" className="bg-[#f8f4ef] px-4 py-32 md:px-7">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-20">
          <div className="grid items-start gap-5 md:gap-12 lg:grid-cols-2">
            <div className="border-0 border-gray-200 pr-8 text-left lg:border-r-4 lg:text-right">
              <div className="mb-4">
                <Title>Our Team —</Title>
              </div>

              <h1 className="text-2xl leading-tight font-bold text-gray-800 md:text-4xl lg:text-5xl">
                Meet the People
                <br />
                Behind the Excellence
              </h1>
            </div>

            <div>
              <p className="text-md leading-7 text-gray-600 md:text-xl">
                Our team is the heart of everything we do. From skilled
                developers to project managers and support staff, each member
                brings a unique blend of expertise, passion, and dedication. We
                foster a collaborative environment where craftsmanship and
                attention to detail shine through in every project.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {allTeamMembers.map((member) => (
            <div
              key={member.id}
              className="group overflow-hidden rounded-lg bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl"
            >
              <img
                src={member.image}
                alt={member.name}
                className="object-cover transition-transform duration-500 group-hover:scale-115"
              />

              <div className="p-6 md:p-10">
                <a href={`/about/team/${member.id}`} className="block">
                  <h4 className="mb-1 text-2xl font-bold text-gray-800">
                    {member.name}
                  </h4>
                  <p className="mb-4 text-lg font-medium text-gray-600">
                    {member.role}
                  </p>
                </a>

                <ul className="flex space-x-3 text-gray-400">
                  {member.socialLinks.map((a) => (
                    <li key={a.label}>
                      <a
                        href={a.href}
                        target="_blank"
                        aria-label={a.label}
                        className="inline-block h-10 w-10 rounded bg-[#f8f4ef] text-center leading-10 text-black transition hover:bg-[#fac105]"
                      >
                        <FontAwesomeIcon icon={a.icon} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { Team };
