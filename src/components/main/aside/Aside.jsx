import ChangePageSettingsContainer from "./changePageSettingsContainer/ChangePageSettingsContainer";

const settingsData = [
  { id: 1, label: "Lingua del profilo", value: "Italiano" },
  { id: 2, label: "Profilo pubblico e URL", value: "www.linkedin.com/in/name-lastname" },
];
const Aside = () => {
    return (
        <aside>
            <ChangePageSettingsContainer settings={settingsData} />
        </aside>
    )
}

export default Aside