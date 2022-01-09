import ButtonLg from "@components/ButtonLg";
import Image from "next/image";
import Link from "next/link";
import ilustrationEmptyBlog from "@public/ilustration-empty-blog.svg";

const Empty = () => {
  return (
    <div className="flex items-center flex-col py-10">
      <div className="mb-4">
        <Image src={ilustrationEmptyBlog} alt="Ilustration Empty Blog" />
      </div>
      <h3 className="text-primary">Belum ada data</h3>
      <p className="text-sm text-primary opacity-80"></p>
      <Link href={"/informations/internship/add"} passHref>
        <ButtonLg className="mt-4">Publish</ButtonLg>
      </Link>
    </div>
  );
};

export default Empty;
