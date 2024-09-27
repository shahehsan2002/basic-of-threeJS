import *as THREE from 'three';

// 1. Create the scene
const scene = THREE.scene = new THREE.scene();
scene.background = new THREE.Color('#F0F0F0');

// 2.Add the camera 
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 0.1, 1000, camera.position.z= 5 );