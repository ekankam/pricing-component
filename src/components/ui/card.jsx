import clsx from "clsx";
import PropTypes from "prop-types";

export default function Card({ className, children }) {
  return (
    <div
      className={clsx(
        "w-full max-w-[350px] flex-shrink-0 bg-white card-shadow text-center py-[31px] px-[29px] z-50",
        className
      )}
    >
      {children}
    </div>
  );
}

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
