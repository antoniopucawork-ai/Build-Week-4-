import ChangePageSettings from "../changePageSettings/ChangePageSettings";

const ChangePageSettingsContainer = ({ settings }) => {
  return (
    <div className="settings-container bg-white rounded-3 border pt-2 pe-1 ps-1">
      {settings.map((s, index) => (
        <ChangePageSettings
          key={s.id}
          label={s.label}
          value={s.value}
          onEdit={s.onEdit}
          isLast={index === settings.length - 1}
        />
      ))}
    </div>
  );
};

export default ChangePageSettingsContainer;
