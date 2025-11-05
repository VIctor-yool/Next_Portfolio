import List from "../headeratom/List";
import { Briefcase, CodeXml, House, Mail, User } from "lucide-react";
const UList = () => {
  return (
    <ul className="flex justify-center items-center gap-12 px-3 py-2.5 ">
      <List Icon={<House />} List="Home" />
      <List Icon={<User />} List="About" />
      <List Icon={<Briefcase />} List="Projects" />
      <List Icon={<CodeXml />} List="Skills" />
      <List Icon={<Mail />} List="Contact" />
    </ul>
  );
};

export default UList;
