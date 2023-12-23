import PropTypes from "prop-types";

export default function Layout({ children }) {
  return (
    <div className="mx-auto max-w-screen-2xl min-w-96 bg-inherit lg:pb-10">
      <img
        src="/assets/images/bg-top.svg"
        alt="top-pattern"
        className="absolute -top-[49px] -right-48 lg:right-0 lg:top-0 z-10"
      />
      <img
        src="/assets/images/bg-bottom.svg"
        alt="bottom-pattern"
        className="z-10 hidden lg:block lg:absolute lg:bottom-0 lg:left-0"
      />
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};
