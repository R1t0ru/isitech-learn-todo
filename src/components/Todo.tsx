import { ChangeEventHandler, FC } from "react";
import { Checkbox } from "./Checkbox";

type Props = {
  title: string;
  done: boolean;
  onCheckboxChange: ChangeEventHandler<HTMLInputElement>;
};

export const Todo: FC<Props> = (props) => {
  const { title, done, onCheckboxChange } = props;

  return (
    <div className="flex items-center border border-gray-300 p-3 justify-between rounded">
      <p className="mr-2">{title}</p>
      <Checkbox checked={done} onChange={onCheckboxChange} />
    </div>
  );
};
