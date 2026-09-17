import { useProfiles } from "../../../../../api/useProfiles";
import SideProfileCard from "../sideProfileCard/SideProfileCard";
import { UserRoundPlus, ArrowRight } from "lucide-react";
import "./PeopleYouMayKnow.css";

const PeopleYouMayKnow = () => {
  const { profiles } = useProfiles();

  const visibleProfiles = profiles.slice(0, 5);

  return (
    <div>
      <div className=" bg-white rounded-3 border pt-2">
        <div className="pe-1 ps-1">
          <div className="p-4 ps-3 pb-0">
            <label className="mb-0 fw-semibold">
              Persone che potresti conoscere
            </label>
            <p className="text-muted lh-1 small">Della tua qualifica</p>
          </div>
          {visibleProfiles.map((profile, index) => (
            <SideProfileCard
              key={profile._id}
              profile={profile}
              isLast={index === visibleProfiles.length - 1}
              buttonLabel={
                <>
                  <UserRoundPlus size={16} className="me-1" />
                  Collegati
                </>
              }
            />
          ))}
        </div>
        <div className="border-top">
          <button className="btn showAllBtn">
            Mostra tutto
            <ArrowRight size={16} className="ms-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PeopleYouMayKnow;
