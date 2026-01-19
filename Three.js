new Three.Scene();
const aspect = window.innerWidth / window.innerHeight;
let FOV = 90;
new THREE.PerspectiveCamera(FOV, aspect , 0.1 , 1000);
new Three.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
scene.background = new THREE.Color(0x87ceeb);
renderer.render(scene, camera);
