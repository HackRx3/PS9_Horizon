import React from "react";
import BotContainer from "./BotContainer";
import ChatWindow from "./ChatWindow";
import GetDetails from "./GetDetails";
import GetStarted from "./GetStarted";
import SelectMode from "./SelectMode";
import VoiceWindow from "./VoiceWindow";


const Bot = () => {
  return (
    <BotContainer>
        <GetStarted />
        <GetDetails />
        <ChatWindow />
        <VoiceWindow type='general-query'/>
        <SelectMode/>
    </BotContainer>
  );
};

export default Bot;
