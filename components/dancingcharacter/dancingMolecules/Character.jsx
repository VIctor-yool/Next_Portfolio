import { FemaleCharacter } from "../dancingAtom/FemaleCharacter";
import { MaleCharacter } from "../dancingAtom/MaleCharacter";

export function Character({ section, duration }) {
  return (
    <div className="relative flex gap-2 items-end">
      <MaleCharacter section={section} duration={duration} />
      <FemaleCharacter section={section} duration={duration} />
    </div>
  );
}
