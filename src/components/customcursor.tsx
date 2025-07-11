// function CustomCursor() {
//   const cursorRef = useRef<HTMLDivElement>(null);
//   useEffect(() => {
//     const moveCursor = (e: MouseEvent) => {
//       if (cursorRef.current) {
//         cursorRef.current.style.left = e.clientX + "px";
//         cursorRef.current.style.top = e.clientY + "px";
//       }
//     };
//     document.addEventListener("mousemove", moveCursor);
//     return () => document.removeEventListener("mousemove", moveCursor);
//   }, []);
//   return (
//     <div
//       ref={cursorRef}
//       style={{
//         position: "fixed",
//         left: 0,
//         top: 0,
//         width: 25,
//         height: 25,
//         pointerEvents: "none",
//         zIndex: 9999,
//         transform: "translate(-50%, -50%)",
//         transition:
//           "background 0.2s, border 0.2s, transform 0.08s cubic-bezier(.4,0,.2,1)",
//       }}
//       className="rounded-full border-2 border-fuchsia-400 bg-fuchsia-400/20 backdrop-blur-sm shadow-lg mix-blend-difference"
//     />
//   );
// }
