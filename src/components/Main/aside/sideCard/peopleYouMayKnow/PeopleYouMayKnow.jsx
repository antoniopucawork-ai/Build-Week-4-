import { useProfiles } from "../../../../../api/useProfiles";
import SideProfileCard from "../sideProfileCard/SideProfileCard";
import { useNavigate } from "react-router-dom";
import LinkedinButton from "../../../../reusable/buttons/LinkedinButton";
import { BUTTON_VARIANT } from "../../../../reusable/buttons/buttonVariants";
import { ArrowRight } from "lucide-react";

const PeopleYouMayKnow = () => {
  const { profiles } = useProfiles();

  {
    /* Utilizzo navigate per poter navigare al profilo dell'utente selezionato. */
  }
  const navigate = useNavigate();

  const visibleProfiles = profiles.slice(0, 5);

  return (
    <div className=" bg-white rounded-3 border pt-2">
      <div className="pe-1 ps-1">
        <div className="p-4 ps-3 pb-0">
          <h6 className="mb-0 fw-semibold">Persone che potresti conoscere</h6>
          <p className="text-muted lh-1 small">Della tua qualifica</p>
        </div>
        {/* Al click sul profilo navigo al profilo dell'utente selezionato,
    passando il suo ID nell'URL. */}
        {visibleProfiles.map((profile, index) => (
          <SideProfileCard
            key={profile._id}
            profile={profile}
            isLast={index === visibleProfiles.length - 1}
            onProfileClick={() => navigate(`/profile/${profile._id}`)}
          >
            <LinkedinButton
              customVariant={BUTTON_VARIANT.ASIDE.CONNECT}
              className="my-2"
            />
          </SideProfileCard>
        ))}
      </div>
      <div className="border-top">
        <button className="btn showAllBtn">
          Mostra tutto
          <ArrowRight size={16} className="ms-1" />
        </button>
      </div>
    </div>
  );
};

export default PeopleYouMayKnow;
