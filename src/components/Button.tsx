export interface ButtonProps {
  onClick: (e: React.SyntheticEvent) => unknown;
  children: React.ReactNode;
  color: string;
}

export default function Button({onClick, children, color}: ButtonProps) {
  return (
    <>
      <a onClick={onClick} className="blue-button">
        {children} this is {color}
      </a>
    </>
  );
}
