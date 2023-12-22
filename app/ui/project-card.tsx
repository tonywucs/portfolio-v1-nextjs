import TagPills from "@/app/ui/tag-pills";
import Image from "next/image";
import Link from "next/link";
const TAGS = ["Hello", "World", "Foo", "Bar"];

export default function ProjectCard() {
  return (
    <div className="flex flex-col py-4 md:flex-row gap-4 border-2 border-red-500">
      <Link href="#" className="flex w-1/2 mt-2 md:max-w-xs md:max-h-60">
        <Image
          src="/laptop-test.png"
          alt="Laptop"
          width={100}
          height={100}
          className="w-full h-full"
        />
      </Link>
      <div className="flex flex-col gap-4 w-fit md:ml-4">
        <Link href="#">
          <h2>Project Name</h2>
        </Link>
        <p>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum. Why do we use it?
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </p>
        <TagPills tags={TAGS} />
      </div>
    </div>
  );
}
