import PropTypes from "prop-types";
import clsx from "clsx";

export default function Button({ type = "primary" }) {
  let styles;

  switch (type) {
    case "primary":
      styles = "primary";
      break;
    case "secondary":
      styles = "secondary mb-[54px]";
      break;
    default:
      styles;
      break;
  }
  return (
    <button
      className={clsx(
        "w-full h-11 rounded-md flex-shrink-0 text-[13px] text-center uppercase tracking-[1.393px] mt-8",
        styles
      )}
    >
      learn more
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
};
