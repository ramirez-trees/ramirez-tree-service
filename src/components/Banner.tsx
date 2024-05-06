export default function Banner() {
  return (
    <div
      className="flex h-40 w-screen items-center justify-center bg-cover bg-center text-center"
      style={{
        backgroundImage: `url('https://www.nps.gov/common/uploads/cropped_image/primary/922495AE-C96F-ED4B-5D1FBBC03B80FB39.jpg?width=1600&quality=90&mode=crop')`,
      }}
    >
      <h1 className="text-3xl text-white">Ramirez Tree Service</h1>
    </div>
  );
}
