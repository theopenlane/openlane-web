import { useEffect, useState } from "react";

const OpenlaneStatus = () => {
  return (
    <iframe
      src={`https://status.theopenlane.io/badge?theme=light`}
      width="250"
      height="30"
      frameBorder="0"
      scrolling="no"
    ></iframe>
  );
};

export default OpenlaneStatus;
