import React, { useContext, useEffect } from "react";

import { MainContext } from "../../contexts/MainContext";
import Section from "../../containers/Section";

export function NotFound() {
  const { setMainStyle } = useContext(MainContext);
  useEffect(() => setMainStyle("white"), [setMainStyle]);

  return (
    <>
      <Section>
        NotFound Page
      </Section>
    </>
  );
}
