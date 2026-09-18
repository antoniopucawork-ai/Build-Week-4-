import { useProfiles } from "../../../../../api/useProfiles";
import SideProfileCard from "../sideProfileCard/SideProfileCard";
import { Plus, ArrowRight } from "lucide-react";

const pagesInfo = [
  {
    id: 1,
    logo: "https://media.licdn.com/dms/image/v2/D560BAQFFyQkhCndGgQ/company-logo_100_100/company-logo_100_100/0/1728487989468/easports_logo?e=1791417600&v=beta&t=gMiR_QfpN1oGoPKrN31IhIF_cJGEtDXUXCINySPn7kg",
    name: "EA SPORTS",
    category: "Videogiochi",
    followers: "252.778",
  },
  {
    id: 2,
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQHU4Uv4o8w-4g/company-logo_100_100/company-logo_100_100/0/1684843922866/paradox_interactive_logo?e=1791417600&v=beta&t=jKuskYjNHWNOHSzlHKkou9PzvTDMRngBAVFZbSZpwyo",
    name: "Paradox Interactive",
    category: "Videogiochi",
    followers: "97.505",
  },
];

const PagesForYou = () => {
  const { profiles } = useProfiles();

  const visibleProfiles = profiles.slice(0, 2);

  return (
    <div>
      <div className="bg-white rounded-3 border pt-2">
        <div className="pe-1 ps-1">
          <div className="p-4 ps-3 pb-0">
            <h6 className="mb-0 fw-semibold">Potrebbero interessarti</h6>
            <p className="text-muted lh-1 small">Pagine per te</p>
          </div>
          {visibleProfiles.map((profile, index) => (
            <SideProfileCard
              key={profile._id}
              profile={profile}
              pageInfo={pagesInfo[index]}
              isLast={index === visibleProfiles.length - 1}
              buttonLabel={
                <>
                  <Plus size={16} className="me-1" />
                  Segui
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

export default PagesForYou;
