import checkIcon from "../../assets/modalIcon/check.svg";
import warnIcon from "../../assets/modalIcon/warn.svg";
import errorIcon from "../../assets/modalIcon/error.svg";
import closeIcon from "../../assets/modalIcon/close.svg";
import "flowbite";

const properties = {
  success: {
    bgClass: "bg-green-200",
    textClass: "text-green-800",
    icon: {
      class: "text-green-600 bg-green-300",
      sr: "Check icon",
      src: checkIcon,
    },
  },
  warn: {
    bgClass: "bg-orange-200",
    textClass: "text-orange-800",
    icon: {
      class: "text-orange-600 bg-orange-300",
      sr: "Warning icon",
      src: warnIcon,
    },
  },
  error: {
    bgClass: "bg-red-200",
    textClass: "text-red-800",
    icon: {
      class: "text-red-600 bg-red-300",
      sr: "Error icon",
      src: errorIcon,
    },
  },
  default: {
    bgClass: "bg-white",
    textClass: "text-gray-500",
  },
};

const icon = (type) => {
  if (properties[type].icon) {
    return (
      <div
        class={`inline-flex flex-shrink-0 justify-center items-center w-8 h-8 rounded-full ${properties[type].icon.class}`}
      >
        <img
          class="w-5 h-5"
          src={properties[type].icon.src}
          alt={`${type}-icon`}
        />
        <span class="sr-only">{properties[type].icon.sr}</span>
      </div>
    );
  }
};

const Toast = (props) => {
  if (props.show) {
    const type = props.type || 'default';
    return (
      <div
        id={`toast-${type}`}
        tabIndex="-1"
        class={`absolute top-5 right-5 flex items-center p-4 mb-4 w-full max-w-xs ${properties[type].textClass} ${properties[type].bgClass} rounded-lg shadow`}
        role="alert"
      >
        {icon(type)}
        <div class="ml-3 text-sm font-normal">{props.text}</div>
        <button
          type="button"
          class={`ml-auto -mx-1.5 -my-1.5 ${properties[type].bgClass} text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 inline-flex h-8 w-8`}
          data-dismiss-target={`#toast-${type}`}
          aria-label="Close"
          onClick={props.onClose}
        >
          <img src={closeIcon} alt="close-icon" />
          <span class="sr-only">Close</span>
        </button>
      </div>
    );
  }
};

export { Toast };
