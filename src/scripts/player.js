import * as THREE from 'three'
import { PointerLockControls } from 'three/examples/jsm/Addons.js'

export class Player {
  camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.1,
    200
  )

  controls = new PointerLockControls(this.camera, document.body)
  
  /**
   * @param {THREE.Scene} scene
   */
  constructor(scene) {
    this.camera.position.set(32, 16, 32)
    scene.add(this.camera)
  }

  /**
   * Returns the current world position of the player
   * @type {THREE.Vector3}
   */
  get position() {
    return this.camera.position
  }
}