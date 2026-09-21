import { useProfiles } from "../../../../api/useProfiles";
import { useNavigate } from "react-router-dom";
import SideProfileCard from "./sideProfileCard/SideProfileCard";
import LinkedinButton from "../../../reusable/buttons/LinkedinButton";
import { BUTTON_VARIANT } from "../../../reusable/buttons/buttonVariants";

const SideCard = () => {
  const { profiles } = useProfiles();
  const navigate = useNavigate();

  const visibleProfiles = profiles.slice(0, 4);

  return (
    <div>
      <div className="bg-white rounded-3 border pt-2 pe-1 ps-1">
        <div className="p-4 ps-3 pb-0">
          <h6 className="mb-0 fw-semibold">Altri profili consultati</h6>
          <p className="text-muted lh-1 small">Visibile solo a te</p>
        </div>

        {visibleProfiles.map((profile, index) => (
          <SideProfileCard
            key={profile._id}
            profile={profile}
            isLast={index === visibleProfiles.length - 1}
            onProfileClick={() => navigate(`/profile/${profile._id}`)}
          >
            <LinkedinButton
              customVariant={BUTTON_VARIANT.ASIDE.VIEW}
              className="my-2"
              profileId={profile._id}
            />
          </SideProfileCard>
        ))}
      </div>
    </div>
  );
};

export default SideCard;
