import React , {useState} from "react";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import Spotify from "./Spotify";
import MusicSets from "./MusicSets";


export default function Music() {

    const [key, setKey] = useState('Spotify');

    return (
      <div  >
      <Tabs style={{paddingTop:"50px", paddingLeft:"20vh", paddingRight:"20vh"}}
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
        justify
      >
        <Tab eventKey="Spotify" title="Spotify">
          <Spotify/>
        </Tab>
        <Tab eventKey="Sets" title="Sets">
          <MusicSets/>
        </Tab>
      </Tabs>
      </div>
    );

}