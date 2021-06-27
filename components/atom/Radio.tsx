import { ReactNode, useState } from 'react';

interface Props extends React.HTMLProps<HTMLInputElement> {
  children?: ReactNode;
  stateVal?: boolean;
}

export default function Radio({
  name,

  stateVal,
  onChange,
  label,
}: Props) {
  const [radio, setradio] = useState<boolean>(stateVal || false);

  const randomId = Math.floor(Math.random() * 300 + 1);

  const _handleChange = () => {
    setradio(!radio);
  };

  return (
    <label htmlFor={randomId.toString()}>
      <div className="flex items-center">
        <div className="w-5 h-5 border transition-all  border-primary rounded-full p-0.5 mr-2">
          <div
            className={
              'w-full h-full  rounded-full ' +
              (radio ? 'bg-primary' : 'bg-white')
            }
          ></div>
        </div>
        <input
          type="radio"
          name={name}
          className="invisible w-full absolute"
          id={randomId.toString()}
          onClick={_handleChange}
        />
        <p>{label}</p>
      </div>
    </label>
  );
}
