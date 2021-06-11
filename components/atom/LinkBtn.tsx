import React, { ReactNode } from 'react';

interface Props extends React.HTMLProps<HTMLButtonElement> {
  children?: ReactNode;
  active?: boolean;
}

export default function LinkBtn({ children, active = false }: Props) {
  return (
    <div className="relative flex flex-col mr-10 ">
      <p
        className={
          ' text-center ' + (active ? ' text-red-100' : ' text-gray-500')
        }
      >
        {children}
      </p>
      <div
        className={
          'block h-0.5 bg-red-100 w-16 mt-2 ' +
          (active ? 'visible' : ' invisible')
        }
      ></div>
    </div>
  );
}
