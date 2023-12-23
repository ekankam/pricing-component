import { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import Layout from "../layout/layout";
import Switch from "../ui/switch";
import { SUBSCRIPTION } from "../../data/price-options";
import Card from "../ui/card";
import Button from "../ui/button";

function Header({ header, className }) {
  return <p className={clsx("mb-6 text-lg", className)}>{header}</p>;
}

Header.propTypes = {
  header: PropTypes.string,
  className: PropTypes.string,
};

function Price({ price, className }) {
  return (
    <div
      className={clsx(
        "mb-8 text-[72px] flex items-center justify-center text-brand-grey-blue-400 w-full px-8",
        className
      )}
    >
      <span className="text-4xl">$</span>
      {price}
    </div>
  );
}

Price.propTypes = {
  price: PropTypes.string,
  className: PropTypes.string,
};

function Item({ item }) {
  return (
    <li className="text-[15px] py-3 border-t border-brand-grey-blue-200/20 last:border-b">
      {item}
    </li>
  );
}

Item.propTypes = {
  item: PropTypes.string,
};

export default function Pricing() {
  const [isChecked, setIsChecked] = useState(false);
  const [subscription, setSubscription] = useState("annually");

  const handlePriceToggle = () => {
    setIsChecked((prev) => !prev);
    setSubscription(isChecked ? "annually" : "monthly");
  };

  const { basic, professional, master } = SUBSCRIPTION[subscription];

  return (
    <Layout>
      <header className="flex items-center justify-center mt-16 lg:mt-[71px] flex-col mb-20 lg:mb-[66px]">
        <span className="text-brand-grey-blue-300 text-[32px] mb-10">
          Our Pricing
        </span>
        <div className="flex items-center gap-6 text-brand-grey-blue-300">
          <p className="text-[15px] opacity-50">Annually</p>
          <Switch isChecked={isChecked} onChecked={handlePriceToggle} />
          <p className="text-[15px] opacity-50">Monthly</p>
        </div>
      </header>
      <div className="flex flex-col items-center justify-center w-full gap-8 mx-auto lg:flex-row px-9 lg:px-0 lg:gap-0 text-brand-grey-blue-300">
        <Card className="rounded-[10px] lg:rounded-tr-none lg:rounded-br-none">
          <Header header="Basic" />
          <Price price={basic.price} />
          <ul>
            <Item item={basic.storage} />
            <Item item={basic.users} />
            <Item item={basic.send} />
          </ul>
          <Button />
        </Card>
        <Card className="rounded-[10px] brand-gradient text-white h-full">
          <Header header="Professional" className="lg:mt-[54px]" />
          <Price price={professional.price} className="text-white" />
          <ul>
            <Item item={professional.storage} />
            <Item item={professional.users} />
            <Item item={professional.send} />
          </ul>
          <Button type="secondary" />
        </Card>
        <Card className="rounded-[10px] lg:rounded-tl-none lg:rounded-bl-none mb-[71px] lg:mb-0">
          <Header header="Master" />
          <Price price={master.price} />
          <ul>
            <Item item={master.storage} />
            <Item item={master.users} />
            <Item item={master.send} />
          </ul>
          <Button />
        </Card>
      </div>
    </Layout>
  );
}
