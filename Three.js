const scene = new THREE.Scene();

const aspect = window.innerWidth / window.innerHeight;
let FOV = 90;
const camera = new THREE.PerspectiveCamera(FOV, aspect, 0.1, 1000);

camera.position.z = 5; // so camera is not at the origin

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

scene.background = new THREE.Color(0x87ceeb);

renderer.render(scene, camera); // renders once
