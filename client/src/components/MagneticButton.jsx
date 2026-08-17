import { Link } from 'react-router-dom';
import { useMagnetic } from '../hooks/useMagnetic';

// Premium CTA button with magnetic hover. Renders a react-router Link when
// `to` is provided, an anchor when `href` is provided, else a <button>.
export default function MagneticButton({
  to,
  href,
  onClick,
  className = 'btn btn-gold btn-lg',
  arrow = false,
  children,
  type,
}) {
  const ref = useMagnetic();
  const cls = `${className} magnetic`.trim();
  const inner = (
    <>
      {children}
      {arrow && <span className="arrow">→</span>}
    </>
  );

  if (to) {
    return (
      <Link ref={ref} to={to} className={cls} onClick={onClick}>
        {inner}
      </Link>
    );
  }
  if (href) {
    return (
      <a ref={ref} href={href} className={cls} onClick={onClick}>
        {inner}
      </a>
    );
  }
  return (
    <button ref={ref} type={type || 'button'} className={cls} onClick={onClick}>
      {inner}
    </button>
  );
}
