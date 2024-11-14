import ExpandableCard from "../components/ExpandableCard";
import DesignToolbox from "../toolboxes/DesignToolbox";
import ProgrammingToolbox from "../toolboxes/ProgrammingToolbox";
import VisualArtsToolbox from "../toolboxes/VisualArtsToolbox";

export default function Toolbox() {
  return (
    <ExpandableCard className="w-full" color="bg-secondary" heading="Toolbox">
      <div className="p-4 text-sm 2xl:text-2xl">
        These are the software, languages, and other resources I use for my
        personal and professional skill development.
      </div>
      <ProgrammingToolbox />
      <DesignToolbox />
      <VisualArtsToolbox />
    </ExpandableCard>
  );
}
