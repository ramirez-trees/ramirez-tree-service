"use client";

import { type ElementRef, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <dialog
      ref={dialogRef}
      className="absolute flex h-screen w-screen items-center bg-black/90"
      style={{ top: 0 }}
      onClose={onDismiss}
      onClick={onDismiss}
    >
      {children}
    </dialog>,
    document.getElementById("modal-root")!,
  );
}
