export default function button({ onClick, children }) {
  return (
    <a
      onClick={onClick}
      className="
	cursor-pointer
	justify-between
	bg-slate-900
	hover:bg-slate-700
	focus:outline-none 
	focus:ring-2 focus:ring-slate-400 
	focus:ring-offset-2
	focus:ring-offset-slate-50
	text-white 
	v 
	h-12 
	px-6 
	rounded-lg 
	w-40
	flex 
	items-center 
	justify-center 
	dark:bg-sky-500 
	dark:highlight-white/20
	dark:hover:bg-sky-400"
    >
	   {children}
    </a>
  );
}
