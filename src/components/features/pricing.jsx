import { useState } from "react";
import Layout from "../layout/layout";
import Switch from "../ui/switch";
import { SUBSCRIPTION } from "../../data/price-options";

export default function Pricing() {
  const [isChecked, setIsChecked] = useState(false);
  const [subscription, setSubscription] = useState("annually");

  const handlePriceToggle = () => {
    setIsChecked((prev) => !prev);
    setSubscription(isChecked ? "annually" : "monthly");
  };

  return (
    <Layout>
      <header className="flex items-center justify-center mt-16 lg:mt-[71px] flex-col z-50 mb-20 lg:mb-[66px]">
        <span className="text-brand-grey-blue-300 text-[32px] mb-10">
          Our Pricing
        </span>
        <div className="text-brand-grey-blue-300 flex items-center gap-6">
          <p className="text-[15px] opacity-50">Annually</p>
          <Switch isChecked={isChecked} onChecked={handlePriceToggle} />
          <p className="text-[15px] opacity-50">Monthly</p>
        </div>
      </header>
    </Layout>
  );
}
