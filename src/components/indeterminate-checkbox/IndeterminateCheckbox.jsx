import Checkbox from "./Checkbox";

export default function IndeterminateCheckbox({
  checkedBoxData,
  handleChange,
}) {
  return (
    <div>
      {checkedBoxData.map((item) => (
        <div
          key={item.id}
          style={{
            marginLeft: "1rem",
            padding: "0.25rem",
          }}
        >
          <Checkbox
            id={item.id}
            label={item.label}
            status={item.status}
            handleChange={handleChange}
          />
          {item.children && item.children.length > 0 && (
            <IndeterminateCheckbox
              checkedBoxData={item.children}
              handleChange={handleChange}
            />
          )}
        </div>
      ))}
    </div>
  );
}
