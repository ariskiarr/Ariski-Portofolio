// import React, { useEffect, useRef, useState } from "react";
// import Matter from "matter-js";
// // List of SVG filenames in public/skills (add/remove as needed)

// const skillSvgs = [
//   "js.svg",
//   "ts.svg",
//   "react.svg",
//   "html.svg",
//   "css.svg",
//   "python.svg",
//   "git.svg",
//   "figma.svg",
//   "node.svg",
//   "php.svg",
//   "tailwind.svg",
//   "vscode.svg",
//   "mysql.svg",
//   "postgres.svg",
//   "Jupyter.svg",
// ];

// type LogoBody = {
//   id: number;
//   svg: string;
//   body: Matter.Body;
// };

// const SkillFallingLogos: React.FC = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [logoBodies, setLogoBodies] = useState<LogoBody[]>([]);
//   const engineRef = useRef<Matter.Engine | null>(null);
//   const renderRef = useRef<Matter.Render | null>(null);
//   const runnerRef = useRef<Matter.Runner | null>(null);
//   const [initialized, setInitialized] = useState(false);
//   const [removedIds, setRemovedIds] = useState<number[]>([]);
//   const nextId = useRef(0);

//   // Initialize Matter.js and spawn all logos once
//   useEffect(() => {
//     if (!containerRef.current || initialized) return;
//     setInitialized(true);
//     const {
//       Engine,
//       Render,
//       World,
//       Bodies,
//       Runner,
//       Mouse,
//       MouseConstraint,
//       Events,
//       Body,
//     } = Matter;
//     const container = containerRef.current;
//     let width = 600;
//     const height = 160;
//     if (container) {
//       const rect = container.getBoundingClientRect();
//       width = rect.width || 600;
//       // height tetap 160 agar responsif, bisa diubah jika ingin dinamis
//     }

//     // Create engine
//     const engine = Engine.create();
//     engine.world.gravity.y = 1;
//     engineRef.current = engine;

//     // Create renderer (hidden, just for physics, not for drawing)
//     const render = Render.create({
//       element: container,
//       engine,
//       options: {
//         width,
//         height,
//         wireframes: false,
//         background: "transparent",
//       },
//     });
//     renderRef.current = render;

//     // Floor
//     const floor = Bodies.rectangle(width / 2, height + 20, width, 40, {
//       isStatic: true,
//       render: { visible: false },
//     });
//     // Walls
//     const leftWall = Bodies.rectangle(-20, height / 2, 40, height, {
//       isStatic: true,
//       render: { visible: false },
//     });
//     const rightWall = Bodies.rectangle(width + 20, height / 2, 40, height, {
//       isStatic: true,
//       render: { visible: false },
//     });
//     World.add(engine.world, [floor, leftWall, rightWall]);

//     // Spawn all logos at random X
//     const bodies: LogoBody[] = skillSvgs.map((svg) => {
//       const id = nextId.current++;
//       const x = 40 + Math.random() * (width - 80);
//       const y = -40 - Math.random() * 60;
//       const body = Bodies.rectangle(x, y, 40, 40, {
//         restitution: 0.6,
//         friction: 0.2,
//         frictionAir: 0.01,
//         label: id.toString(),
//         render: { visible: false },
//       });
//       // Give a little random spin
//       Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.1);
//       return { id, svg, body };
//     });
//     bodies.forEach((b) => World.add(engine.world, b.body));
//     setLogoBodies(bodies);

//     // Mouse interaction (drag)
//     const mouse = Mouse.create(container);
//     const mouseConstraint = MouseConstraint.create(engine, {
//       mouse,
//       constraint: {
//         stiffness: 0.9,
//         render: { visible: false },
//       },
//     });
//     World.add(engine.world, mouseConstraint);

//     // Remove logo on click
//     Events.on(mouseConstraint, "mousedown", () => {
//       const mousePos = mouseConstraint.mouse.position;
//       const found = bodies.find((b) => {
//         return Matter.Bounds.contains(b.body.bounds, mousePos);
//       });
//       if (found) {
//         setRemovedIds((ids) => [...ids, found.id]);
//         World.remove(engine.world, found.body);
//       }
//     });

//     // Run engine
//     const runner = Runner.create();
//     runnerRef.current = runner;
//     Runner.run(runner, engine);
//     // Render.run(render); // not needed, we use React for visuals

//     return () => {
//       Render.stop(render);
//       Runner.stop(runner);
//       World.clear(engine.world, false);
//       Engine.clear(engine);
//       render.canvas?.remove();
//     };
//   }, [initialized]);

//   // Update React positions from physics
//   const [, forceUpdate] = useState(0);
//   useEffect(() => {
//     let raf: number;
//     function update() {
//       forceUpdate((n) => n + 1);
//       raf = requestAnimationFrame(update);
//     }
//     update();
//     return () => cancelAnimationFrame(raf);
//   }, []);

//   // Remove logo from UI when removedIds updated
//   const visibleLogos = logoBodies.filter((l) => !removedIds.includes(l.id));

//   return (
//     <div
//       ref={containerRef}
//       className="relative w-full h-40 overflow-visible flex items-center justify-center"
//       style={{ minHeight: 160 }}
//     >
//       {visibleLogos.map((logo) => {
//         const { position, angle } = logo.body;
//         return (
//           <span
//             key={logo.id}
//             className="absolute select-none cursor-pointer"
//             style={{
//               left: position.x,
//               top: position.y,
//               width: 40,
//               height: 40,
//               transform: `translate(-50%, -50%) rotate(${angle}rad)`,
//               filter: "drop-shadow(0 2px 4px #00fff0a0)",
//               transition: "box-shadow 0.2s",
//               zIndex: 2,
//             }}
//             title="Klik untuk ambil"
//           >
//             {/* eslint-disable-next-line @next/next/no-img-element */}
//             <img
//               src={`/skills/${logo.svg}`}
//               alt={logo.svg.replace(/\.svg$/, "")}
//               width={40}
//               height={40}
//               style={{ display: "block" }}
//               draggable={false}
//             />
//           </span>
//         );
//       })}

//       {/* Floor visual */}
//       <div
//         className="absolute left-0 bottom-0 w-full h-6 bg-gradient-to-t from-cyan-200/60 to-transparent pointer-events-none rounded-b-xl"
//         style={{ zIndex: 1 }}
//       />
//     </div>
//   );
// };

// export default SkillFallingLogos;
