import FeatureProvider from "./context/featureContext";
import Feature from "./Components/Feature.jsx";
import "./styles.css";

export default function App() {
  return (
    <FeatureProvider>
      <Feature feature="isGooglePayEnabled" value={true}>
        Google
      </Feature>
      <Feature feature="isApplePayEnabled" value={false}>
        Apple
      </Feature>
    </FeatureProvider>
  );
}
