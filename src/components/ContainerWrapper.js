import React from "react";

export default function ContainerWrapper({ children }) {
  return <div style={{ border: "1px solid black" }}>{children}</div>;
}
