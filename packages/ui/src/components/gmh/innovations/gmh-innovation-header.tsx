export function InnovationHeader() {
  return (
    <div className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-white mb-4">
          Innovation Title
        </h1>
        <p className="text-white/90">
          What is it?
        </p>
      </div>
    </div>
  );
}
