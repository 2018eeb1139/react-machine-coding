import { createContext, useState } from "react";

export const FeatureContext = createContext();

export default function FeatureProvider({ children }) {
  const [features, setFeatures] = useState({
    isGooglePayEnabled: true,
    isApplePayEnabled: false,
  });
  return (
    <FeatureContext.Provider value={{ features, setFeatures }}>
      {children}
    </FeatureContext.Provider>
  );
}
