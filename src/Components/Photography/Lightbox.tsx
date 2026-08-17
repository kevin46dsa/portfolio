import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { motion, useReducedMotion } from "framer-motion";
import { FaXmark, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import type { Photo } from "../../Constants/PhotographyData";
import "./Lightbox.css";

type LightboxProps = {
  photos: Photo[];
  initialIndex: number;
  altPrefix: string;
  onClose: () => void;
};

const FOCUSABLE_SELECTOR = 'button, [href], [tabindex]:not([tabindex="-1"])';

export const Lightbox = ({ photos, initialIndex, altPrefix, onClose }: LightboxProps) => {
  const [index, setIndex] = useState(initialIndex);
  const reduceMotion = useReducedMotion();
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerElRef = useRef<Element | null>(null);

  const goNext = useCallback(() => setIndex((i) => (i + 1) % photos.length), [photos.length]);
  const goPrev = useCallback(
    () => setIndex((i) => (i - 1 + photos.length) % photos.length),
    [photos.length]
  );

  useEffect(() => {
    triggerElRef.current = document.activeElement;
    dialogRef.current?.focus();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
      if (triggerElRef.current instanceof HTMLElement) {
        triggerElRef.current.focus();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (photos.length > 1) {
        if (e.key === "ArrowRight") goNext();
        if (e.key === "ArrowLeft") goPrev();
      }
      if (e.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, goNext, goPrev, photos.length]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  const photo = photos[index];

  return createPortal(
    <motion.div
      ref={dialogRef}
      className="lightbox-backdrop"
      data-testid="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`${altPrefix} viewer`}
      tabIndex={-1}
      onClick={handleBackdropClick}
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: reduceMotion ? 0 : 0.2 }}
    >
      <button
        type="button"
        className="lightbox-close"
        data-testid="lightbox-close"
        aria-label="Close"
        onClick={onClose}
      >
        <FaXmark aria-hidden="true" />
      </button>

      {photos.length > 1 && (
        <button
          type="button"
          className="lightbox-nav lightbox-prev"
          data-testid="lightbox-prev"
          aria-label="Previous photo"
          onClick={goPrev}
        >
          <FaChevronLeft aria-hidden="true" />
        </button>
      )}

      <motion.img
        key={photo.source}
        src={photo.source}
        alt={photo.alt ?? `${altPrefix} ${index + 1} of ${photos.length}`}
        data-testid="lightbox-image"
        className="lightbox-image"
        initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: reduceMotion ? 0 : 0.2 }}
      />

      {photos.length > 1 && (
        <button
          type="button"
          className="lightbox-nav lightbox-next"
          data-testid="lightbox-next"
          aria-label="Next photo"
          onClick={goNext}
        >
          <FaChevronRight aria-hidden="true" />
        </button>
      )}
    </motion.div>,
    document.body
  );
};
