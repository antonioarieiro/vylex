import React from "react";
import Link from "next/link";
import * as Dsc from "../../styles/dsc";

interface PathItem {
  name: string;
  link: string;
}

interface Props {
  path: PathItem[];
}

const BreadCrumb: React.FC<Props> = ({ path }) => {
  return (
    <div className="w-full flex items-center gap-2 cursor-pointer">
      <Link href="/" passHref>
        <Dsc.ReturnLink as="a">{path[0].name}</Dsc.ReturnLink>
      </Link>
      /<Dsc.CurrentPath>{path[1].name}</Dsc.CurrentPath>
    </div>
  );
};

export default BreadCrumb;
