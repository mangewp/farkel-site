import './Marquee.css';

/**
 * Repeating wordmark band. Decorative, so it is hidden from assistive tech and
 * it stops moving entirely under prefers-reduced-motion.
 */
export default function Marquee({ text, repeat = 8 }) {
  const items = Array.from({ length: repeat }, (_, i) => (
    <span className="marquee-item" key={i}>
      {text}
      <span className="marquee-sep" />
    </span>
  ));

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items}
        {items}
      </div>
    </div>
  );
}
