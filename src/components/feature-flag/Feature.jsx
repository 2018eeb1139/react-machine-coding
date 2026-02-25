import { useContext } from "react";
import { FeatureContext } from "../context/featureContext";

export default function Feature({ feature, children, value }) {
  const { features } = useContext(FeatureContext);

  return (
    <div className="App">{features[feature] === value ? children : null}</div>
  );
}
