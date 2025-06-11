import type { FC } from "react";

type VerticalSeparatorProps = {
  size?: 10;
  color?: string;
  weight?: number;
};
const VerticalSeparator: FC<VerticalSeparatorProps> = ({
  size = 12,
  color = "text-gray-500",
  weight = 2,
}) => {
  return (
    <div
      className={`h-[${size}px] bor border border-l-${weight} ${color}`}
    ></div>
  );
};
export default VerticalSeparator;
