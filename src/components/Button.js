export default function button({ onClick, children }) {
  return (
   <>
  
    <a
      onClick={onClick}
      className="blue-button"
    >
	   {children}
    </a>
    </>
  );
}
