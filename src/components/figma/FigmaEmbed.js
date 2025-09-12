// components/FigmaEmbed.js
export default function FigmaEmbed({ src }) {
  return (
    <div className="overflow-hidden shadow-lg rounded-lg w-[1440px] h-[900px] mx-auto">
      <iframe
        src={src}
        allowFullScreen
        className="w-full h-full border-0"
      />
    </div>
  );
}
