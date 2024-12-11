export default function CustomBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <div className="h-full w-full dark:bg-black bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.05] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#191919] bg-secondary [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div
          className="absolute w-full h-full top-[80px] opacity-15 blur-[100px] saturate-150"
          style={{
            backgroundImage: `
          radial-gradient(at 27% 37%, hsla(210, 95%, 65%, 1) 0px, transparent 50%), /* Light Blue */
  radial-gradient(at 10% 29%, hsla(220, 90%, 60%, 1) 0px, transparent 50%), /* Slightly Darker Blue */
  radial-gradient(at 55% 100%, hsla(230, 85%, 55%, 1) 0px, transparent 50%), /* Medium Blue */
  radial-gradient(at 42% 89%, hsla(240, 80%, 50%, 1) 0px, transparent 50%), /* Darker Blue */
  radial-gradient(at 97% 21%, hsla(250, 75%, 45%, 1) 0px, transparent 50%), /* Deep Blue */
  radial-gradient(at 69% 43%, hsla(260, 70%, 40%, 1) 0px, transparent 50%);
                `,
          }}
        ></div>
      </div>
    </div>
  );
}
