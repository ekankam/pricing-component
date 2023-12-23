import PropTypes from "prop-types";

export default function Layout({ children }) {
  return (
    <div className="max-w-screen-2xl min-w-96 mx-auto bg-inherit">
      <img
        src="/assets/images/bg-top.svg"
        alt="top-pattern"
        className="absolute -top-[49px] -right-48 lg:right-0 lg:top-0"
      />
      <img
        src="/assets/images/bg-bottom.svg"
        alt="bottom-pattern"
        className="hidden lg:block lg:absolute lg:bottom-0 lg:left-0"
      />
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};
