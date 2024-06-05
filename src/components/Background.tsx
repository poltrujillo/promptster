export default function Background() {
  return (
    <div className="fixed left-0 top-0 -z-10 h-full w-full">
      <div
        className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950"
        style={{
          backgroundImage: `linear-gradient(38.73deg, rgba(204, 0, 187, 0.25) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.25) 100%)`,
        }}
      ></div>
    </div>
  );
}
