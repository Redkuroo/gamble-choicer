const GeometryBg = () => (
  <svg
    className="fixed inset-0 w-full h-full pointer-events-none z-0"
    width="100%"
    height="100%"
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
    style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0 }}
  >
    {/* Vertical lines */}
    {[...Array(10)].map((_, i) => (
      <line
        key={`v-${i}`}
        x1={(i + 1) * 10}
        y1={0}
        x2={(i + 1) * 10}
        y2={100}
        stroke="#fff"
        strokeOpacity="0.04"
        strokeWidth="0.5"
      />
    ))}
    {/* Horizontal lines */}
    {[...Array(5)].map((_, i) => (
      <line
        key={`h-${i}`}
        x1={0}
        y1={(i + 1) * 20}
        x2={100}
        y2={(i + 1) * 20}
        stroke="#fff"
        strokeOpacity="0.04"
        strokeWidth="0.5"
      />
    ))}
    {/* Optionally add diagonal lines or other shapes here */}
  </svg>
);

export default GeometryBg; 