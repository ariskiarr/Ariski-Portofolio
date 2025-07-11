// declare class Pointer {
//   id: number;
//   texcoordX: number;
//   texcoordY: number;
//   prevTexcoordX: number;
//   prevTexcoordY: number;
//   deltaX: number;
//   deltaY: number;
//   down: boolean;
//   moved: boolean;
//   color: { r: number; g: number; b: number };
//   constructor();
// }

// type FBO = {
//   texture: WebGLTexture;
//   fbo: WebGLFramebuffer;
//   width: number;
//   height: number;
//   texelSizeX: number;
//   texelSizeY: number;
//   attach: (id: number) => number;
// };
// type DoubleFBO = {
//   width: number;
//   height: number;
//   texelSizeX: number;
//   texelSizeY: number;
//   read: FBO;
//   write: FBO;
//   swap: () => void;
// };

// declare let dye: DoubleFBO;
// declare let velocity: DoubleFBO;
// declare let divergence: FBO;
// declare let curl: FBO;
// declare let pressure: DoubleFBO;

// // Agar variabel global dikenali di window (opsional, jika akses window.dye dst)
// interface Window {
//   dye: DoubleFBO;
//   velocity: DoubleFBO;
//   divergence: FBO;
//   curl: FBO;
//   pressure: DoubleFBO;
// }
