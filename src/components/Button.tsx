export interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  label: string;
  variant: "blue" | "green" | "red";
  icon: React.ReactNode;
}

export default function Button(props: ButtonProps) {
  const {onClick, label, variant, icon} = props;

  return (
    <>
      <button onClick={onClick} className={`${variant}-button`}>
        {icon} {label}
      </button>
    </>
  );
}
