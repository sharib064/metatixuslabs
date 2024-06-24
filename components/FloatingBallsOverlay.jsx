export default function FloatingBallsOverlay({ images: [img1, img2] }) {
  return (
    <div className="absolute w-full h-full pointer-events-none overflow-hidden blur-sm">
      <div className="absolute top-32 -left-32 animate-float delay-50">
        <img src={img1} alt="ball" />
      </div>

      <div className="absolute -bottom-80 -right-32 animate-float">
        <img src={img2} alt="ball" />
      </div>
    </div>
  )
}
