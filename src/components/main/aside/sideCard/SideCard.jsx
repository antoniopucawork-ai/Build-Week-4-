import { useProfiles } from "../../../../api/useProfiles";
import SideProfileCard from "./sideProfileCard/SideProfileCard";

const SideCard = () => {
  const { profiles } = useProfiles();

  return (
    <div>
      <div className=" bg-white rounded-3 border pt-2 pe-1 ps-1">
        <div className="p-4 ps-3 pb-0">
        <h6 className="mb-0 fw-semibold">Altri profili consultati</h6>
        <p className="text-muted lh-1 small">Visibile solo a te</p>
        </div>
        {profiles.slice(0, 4).map((profile, index) => (
          <SideProfileCard
            key={profile._id}
            profile={profile}
            isLast={index === 3}
            buttonLabel="Visualizza"
          />
        ))}
      </div>
    </div>
  );
};

export default SideCard;
