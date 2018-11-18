import SceneManager from './SceneManager';

export default container => {
  const CANVAS = (document, container) => {
    let canvas = document.createElement('canvas');
    containerElement.appendChild(canvas);
    return canvas;
  };
  const sceneManager = new SceneManager(CANVAS);

  window.onresize = () => {
    CANVAS.style.width = '100%';
    CANVAS.style.height = '100%';

    CANVAS.width = document.InnerWidth;
    CANVAS.height = document.InnerHeight;

    sceneManager.onWindowResize();
  }

  // window.addEventListener('click', sceneManager.onClick, false);

  function render(time) {
    requestAnimationFrame(render);
    sceneManager.animate();
  }

}
