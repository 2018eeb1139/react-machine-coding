import "./styles.css";

const CustomSwitch = ({ children, value }) => {
  const cases = [];
  const defaultCases = [];
  // console.log(children);
  children.map((child) => {
    if (child.type.name === "CustomCase") {
      if (typeof child.props.value === "function") {
        if (child.props.value(value)) {
          cases.push(child);
        }
      } else if (child.props.value === value) {
        cases.push(child);
      }
    } else if (child.type.name === "DefaultCase") {
      defaultCases.push(child);
    }
  });
  if (cases.length > 0) {
    return cases;
  } else {
    return defaultCases;
  }
};

const CustomCase = ({ children }) => {
  return <>{children}</>;
};

const DefaultCase = ({ children }) => {
  return <>{children}</>;
};

export default function App() {
  return (
    <>
      <CustomSwitch value={20}>
        <CustomCase value={(e) => e > 10}>
          <div>Hello greater than 10.</div>
        </CustomCase>
        <CustomCase value={20}>Hello 20</CustomCase>
        <CustomCase value={30}>Hello 30</CustomCase>
        <CustomCase value={10}>
          <div>Hello 10</div>{" "}
        </CustomCase>
        <DefaultCase>Hello Default</DefaultCase>
      </CustomSwitch>
    </>
  );
}
