export default function Background() {
  return (
    <div className="fixed left-0 top-0 -z-10 h-full w-full">
      <div className="absolute w-full h-full bg-[#0b0d13]">
        <div className="absolute bottom-0 right-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(0,200,255,0.15),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-0 left-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(0,255,242,0.15),rgba(255,255,255,0))]"></div>
      </div>
    </div>
  );
}
