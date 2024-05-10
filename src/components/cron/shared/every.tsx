import { Mode } from "@sbzen/cron-core";

import { genClassName } from "./../helpers";
import { SharedProps } from "./props.type";

type Props = {
  label: string;
} & SharedProps;

export const SimpleEvery = ({
  cssClassPrefix = "",
  checked = false,
  disabled = false,
  label,
  onSelect,
  segmentId,
}: Props) => (
  <div
    className={genClassName(
      cssClassPrefix,
      ["form-group"],
      ["c-every", "c-segment"]
    )}
  >
    <div
      className={genClassName(
        cssClassPrefix,
        ["flex items-center"],
        ["c-every-check"]
      )}
    >
      <input
        className={genClassName(
          cssClassPrefix,
          ["form-radio h-4 w-4 text-indigo-600"],
          ["c-every-option"]
        )}
        type="radio"
        id={segmentId}
        value={Mode.EVERY}
        checked={checked}
        disabled={disabled}
        onChange={onSelect}
      />

      <label
        className={genClassName(
          cssClassPrefix,
          ["ml-2 text-gray-900 dark:text-gray-200"],
          ["c-every-option-label"]
        )}
        htmlFor={segmentId}
      >
        {label}
      </label>
    </div>
  </div>
);
