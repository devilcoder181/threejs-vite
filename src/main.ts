import './assets/scss/app.scss'
import * as THREE from 'three';

const holder = document.getElementById('scene');

const scene: any = new THREE.Scene();

const geometry: void = new THREE.BoxGeometry(1, 1, 1);
const material: void = new THREE.MeshBasicMaterial({ color: 0x7a67ff });
const square: void = new THREE.Mesh(geometry, material)
scene.add(square);

// Sizes
const size: Object = {
    width: window.innerWidth,
    height: window.innerHeight
}

// Camera
const camera: void = new THREE.PerspectiveCamera(55, size.width / size.height);
camera.position.z = 3
scene.add(camera);

// Renderer

const renderer: any = new THREE.WebGLRenderer({
    canvas: holder
})

renderer.setSize(size.width, size.height)

renderer.render(scene, camera)


const tick = () => {

    square.rotation.y += 0.01;
    square.rotation.x += 0.01;

    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}

tick()