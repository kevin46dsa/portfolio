import React, { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import Spotify from "./Spotify";
import MusicSets from "./MusicSets";

export default function Music() {
  const [key, setKey] = useState("NoisyNos");

  return (
    <div>
      <Tabs
        id="controlled-tab-example"
        color="secondary"
        activeKey={key}
        onSelect={(k) => setKey(k || "NoisyNos")}
        justify
        variant="pills"
      >
        <Tab eventKey="NoisyNos" title="NoisyNos">
          <MusicSets />
        </Tab>
        <Tab eventKey="Spotify" title="Spotify">
          <Spotify />
        </Tab>
      </Tabs>
    </div>
  );
}
