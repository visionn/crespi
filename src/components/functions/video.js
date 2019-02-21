import React, { Component } from 'react';
export const Video = () => {
  let scene = new THREE.Scene();
  let renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  let camera = new THREE.Camera();
  renderer.setSize(this.container.clientWidth, this.container.clientHeight);
  renderer.gammaOutput = true;
  renderer.gammaFactor = 2.2;
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setClearColor(new THREE.Color('black'), 0);
  this.container.appendChild(renderer.domElement);
  let controls = new THREE.OrbitControls(camera);
  camera = new THREE.PerspectiveCamera(
    75,
    this.container.clientWidth / this.container.clientHeight,
    0.1,
    1000,
  );
  camera.position.set(0, 0, 1);
  let geometry = new THREE.SphereBufferGeometry(-20, 20, 20);
  let video = this.container;
  video.crossOrigin = 'anonymous';
  video.loop = true;
  video.src = '../videos/test.mp4';
  video.setAttribute('webkit-playsinline', 'webkit-playsinline');
  video.play();
  let texture = new THREE.VideoTexture(video);
  let material = new THREE.MeshBasicMaterial({ map: texture });
  texture.flipY = false;
  let videoMesh = new THREE.Mesh(geometry, material);
  videoMesh.name = 'video';
  this.props.scene.add(videoMesh);
  window.addEventListener('resize', onWindowResize, false);
  const onWindowResize = () => {
    try {
      // asign new window sizes to camera
      camera.aspect = this.container.clientWidth / this.container.clientHeight;
      // updates camera projections
      camera.updateProjectionMatrix();
      // updates renderer size on reductction for responsive canvas
      renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    } catch (e) {}
  };
  const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    return (
      <div>
        <video ref={el => (this.container = el)} />
      </div>
    );
  };
};
