import React, { useContext, useEffect } from "react";

import { MainContext } from "../../contexts/MainContext";
import Section from "../../containers/Section";

export function ProfilePage() {
  const { setMainStyle } = useContext(MainContext);
  useEffect(() => setMainStyle("white"), [setMainStyle]);

  return (
    <>
      <Section>
        Profile Page
      </Section>
    </>
  );
}
