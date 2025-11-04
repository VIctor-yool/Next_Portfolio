import List from "../headeratom/List";
import { Briefcase, CodeXml, House, Mail, User } from "lucide-react";
const UList = () => {
  return (
    <ul className="flex justify-center items-center gap-8 px-3 py-2.5 border">
      <List Icon={<House />} List="Home" />
      <List Icon={<User />} List="About" />
      <List Icon={<Briefcase />} List="Projects" />
      <List Icon={<CodeXml />} List="skills" />
      <List Icon={<Mail />} List="contact" />
    </ul>
  );
};

export default UList;
