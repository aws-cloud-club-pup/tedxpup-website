const XBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" style={{ filter: "grayscale(53%)" }}>
      <img
        src="/sponsors/x.webp"
        alt=""
        className="absolute top-0 right-[-10%] w-[800px] max-w-none rotate-12 blur-[1px] opacity-100 mix-blend-screen"
      />
      <img
        src="/sponsors/x.webp"
        alt=""
        className="absolute bottom-[-10%] left-[-10%] w-[600px] -rotate-12 blur-[2px] opacity-100 mix-blend-screen"
      />
      {/* Grain */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`
        }}
      />
    </div>
  );
};

export default XBackground;
