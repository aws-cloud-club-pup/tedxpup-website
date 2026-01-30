
const XBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <img 
        src="/sponsors/x.webp" 
        alt="" 
        className="absolute top-0 right-[-10%] w-[800px] max-w-none opacity-100 mix-blend-screen rotate-12 blur-[1px]"
      />
      <img 
        src="/sponsors/x.webp" 
        alt="" 
        className="absolute bottom-[-10%] left-[-10%] w-[600px] opacity-100 mix-blend-screen -rotate-12 blur-[2px]"
      />
    </div>
  );
};

export default XBackground;
