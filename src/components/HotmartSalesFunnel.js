import React, { useEffect } from "react";

const HotmartSalesFunnel = () => {
  useEffect(() => {
    // Criar e carregar o script do Hotmart
    const script = document.createElement("script");
    script.src = "https://checkout.hotmart.com/lib/hotmart-checkout-elements.js";
    script.async = true;
    script.onload = () => {
      if (window.checkoutElements) {
        window.checkoutElements.init("salesFunnel").mount("#hotmart-sales-funnel");
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="hotmart-sales-funnel" className="mt-5"></div>;
};

export default HotmartSalesFunnel;
