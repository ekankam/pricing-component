import PropTypes from "prop-types";
import clsx from "clsx";

export default function Switch({ isChecked = false, onChecked }) {
  return (
    <div
      className="w-14 h-8 rounded-3xl cursor-pointer brand-gradient relative"
      onClick={onChecked}
    >
      <span
        className={clsx(
          "block rounded-full w-5 h-5 bg-brand-grey-blue-100 cursor-pointer absolute top-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out",
          { "right-1": isChecked },
          { "left-1": !isChecked }
        )}
      />
    </div>
  );
}

Switch.propTypes = {
  isChecked: PropTypes.bool,
  onChecked: PropTypes.func,
};
