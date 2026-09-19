import ChangePageSettingsContainer from "./changePageSettingsContainer/ChangePageSettingsContainer";
import Adv from "../../main/aside/adv/Adv";
import SideCard from "../../main/aside/sideCard/SideCard";
import PeopleYouMayKnow from "../../main/aside/sideCard/peopleYouMayKnow/PeopleYouMayKnow";
import PagesForYou from "../../main/aside/sideCard/pagesForYou/PagesForYou";

const settingsData = [
  { id: 1, label: "Lingua del profilo",
     value: "Italiano" 
    },
  {
    id: 2,
    label: "Profilo pubblico e URL",
    value: "www.linkedin.com/in/name-lastname",
  },
];

/*
Il profilo arriva dalla pagina, che ha gia recuperato quello giusto ma
prima l'Aside chiamava useProfile() senza id, quindi mostrava sempre
l'utente del token anche se visita il profilo di qualcun altro
*/
const Aside = ({ profile }) => {
  return (
    <aside className="d-flex flex-column gap-2">
      <div className="d-none d-md-block">
        <ChangePageSettingsContainer settings={settingsData} />
      </div>

      {profile && (
        <div className="d-none d-md-block">
          <Adv user={profile} />
        </div>
      )}

      <SideCard />

      <PeopleYouMayKnow />

      <PagesForYou />

      {profile && (
        <div className="d-none d-md-block">
          <Adv user={profile} sticky />
        </div>
      )}
    </aside>
  );
};

export default Aside;
