import React from "react";
import { Card } from "antd";

export const MapComponent = () => {
  return (
    <>
      <Card>
        <iframe
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3289.02154880535!2d-58.5799577!3d-34.4769776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbacafe52aedb%3A0x70b04f6bc5b345bc!2sCam.%20de%20la%20Loma%205215-5293%2C%20B1644CIG%20Victoria%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1716922712336!5m2!1ses!2sar`}
          width="100%"
          height="200"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Card>
    </>
  );
};
