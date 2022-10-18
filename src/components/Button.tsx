export interface ButtonProps {
  onClick: (e: React.SyntheticEvent) => unknown;
  children: React.ReactNode;
  variant: string;
  label: string;
}

export default function Button({onClick, label}: ButtonProps) {
  return (
    <>
      <a onClick={onClick} className="blue-button text-center">
        {label}
      </a>
    </>
  );
}
