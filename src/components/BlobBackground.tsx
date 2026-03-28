export default function BlobBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Blob 1 - top left, teal */}
      <div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-30 animate-blob-1"
        style={{ background: "radial-gradient(circle, hsl(163 42% 53%) 0%, transparent 70%)" }}
      />
      {/* Blob 2 - bottom right, navy */}
      <div
        className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full opacity-20 animate-blob-2"
        style={{ background: "radial-gradient(circle, hsl(215 30% 35%) 0%, transparent 70%)" }}
      />
      {/* Blob 3 - center, teal faint */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full opacity-15 animate-blob-3"
        style={{ background: "radial-gradient(circle, hsl(163 50% 60%) 0%, transparent 70%)" }}
      />
      {/* Blob 4 - top right, warm */}
      <div
        className="absolute -top-20 right-1/4 w-[350px] h-[350px] rounded-full opacity-10 animate-blob-4"
        style={{ background: "radial-gradient(circle, hsl(40 60% 70%) 0%, transparent 70%)" }}
      />
    </div>
  );
}
