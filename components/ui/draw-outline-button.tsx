export default function DrawOutlineButton({
  color,
  children,
  ...rest
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) {
  return (
    <button
      {...rest}
      className="group relative w-full h-full transition-colors duration-[400ms]"
    >
      <div className="flex flex-col justify-center items-center">
        {children}
      </div>

      {/* TOP */}
      <span className="absolute left-0 top-0 h-[4px] w-0 bg-secondary transition-all duration-100 group-hover:w-full" />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[4px] bg-secondary transition-all delay-100 duration-100 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[4px] w-0 bg-secondary transition-all delay-200 duration-100 group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-[4px] bg-secondary transition-all delay-300 duration-100 group-hover:h-full" />
    </button>
  );
}
