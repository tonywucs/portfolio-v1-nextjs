import Image from "next/image";
import LinkedinSVG from "./ui/linkedin-svg";
import GithubSVG from "./ui/github-octo-svg";
import GmailSVG from "./ui/gmail-svg";
import TagPills from "./ui/tag-pills";
import ProjectCard from "./ui/project-card";
import EducationCard from "./ui/education-card";
import BlogPostCard from "./ui/blog-post-card";
const TAGS = ["Hello", "World", "Foo", "Bar"];

export default function Home() {
  return (
    <main className="m-8">
      <BlogPostCard />
      <header className="w-full lg:w-1/2 lg:fixed">
        <div>
          <h1>Tony Wu</h1>
          <h2>Full Stack Engineer</h2>
          <p>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </p>
        </div>

        <nav className="hidden lg:w-full lg:flex lg:justify-center">
          <ul>
            <li>
              <h3>About</h3>
            </li>
            <li>
              <h3>Projects</h3>
            </li>
            <li>
              <h3>Education</h3>
            </li>
            <li>
              <h3>Blog</h3>
            </li>
          </ul>
        </nav>

        <ul className="flex my-4 gap-4">
          <li>
            <LinkedinSVG
              className="w-8 h-8"
              alt="LinkedIn Icon"
              aria-label="LinkedIn Icon"
            />
          </li>
          <li>
            <GithubSVG
              className="w-8 h-8"
              alt="GitHub Icon"
              aria-label="GitHub Icon"
            />
          </li>
          <li>
            <GmailSVG
              className="w-8 h-8"
              alt="Gmail Icon"
              aria-label="Gmail Icon"
            />
          </li>
        </ul>

      </header>

      <section className="mt-16">
        <h3>About</h3>
        <p className="mt-4">
        What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been the industry's standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and more
        recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum. Why do we use it? It is a long established fact
        that a reader will be distracted by the readable content of a page when
        looking at its layout. The point of using Lorem Ipsum is that it has a
        more-or-less normal distribution of letters, as opposed to using
        'Content here, content here', making it look like readable English.
      </p>
      </section>

      <section className="">
        {/* Project Cards */}

      </section>

      <section className="">
        {/* Education Cards */}
      </section>

      <section className="">
        {/* Blog Section */}
      </section>
      
    </main>
  );
}
