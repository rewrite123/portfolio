import { Button } from "@react-email/button";
import { Html } from "@react-email/html";
import React from "react";

const Index = () => {
  return (
    <Html>
      <Button
        pX={20}
        pY={12}
        href="https://example.com"
        style={{ background: "#000", color: "#fff" }}
      >
        Click me
      </Button>
    </Html>
  );
};
export default Index;
