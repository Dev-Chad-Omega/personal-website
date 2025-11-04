export default class Gradient {
  initGradient(selector) {
    const canvas = document.querySelector(selector);
    if (!canvas) return;

    const gl = canvas.getContext("webgl", { premultipliedAlpha: false });
    if (!gl) return; // CSS fallback handles background

    const vsrc = "attribute vec2 p; void main(){ gl_Position = vec4(p,0.,1.); }";
    const fsrc = `
      precision mediump float;
      uniform vec2 r;
      uniform vec4 c1; uniform vec4 c2; uniform vec4 c3; uniform vec4 c4;
      void main(){
        vec2 uv = gl_FragCoord.xy / r;
        vec3 col = mix(mix(c1.rgb,c2.rgb,uv.x), mix(c3.rgb,c4.rgb,uv.y), 0.5);
        gl_FragColor = vec4(col,1.0);
      }
    `;

    const program = gl.createProgram();
    const vs = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vs, vsrc);
    gl.compileShader(vs);

    const fs = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fs, fsrc);
    gl.compileShader(fs);

    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    gl.useProgram(program);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const attribPointer = gl.getAttribLocation(program, "p");
    gl.enableVertexAttribArray(attribPointer);
    gl.vertexAttribPointer(attribPointer, 2, gl.FLOAT, false, 0, 0);

    const uniformLocations = {
      resolution: gl.getUniformLocation(program, "r"),
      colors: [
        gl.getUniformLocation(program, "c1"),
        gl.getUniformLocation(program, "c2"),
        gl.getUniformLocation(program, "c3"),
        gl.getUniformLocation(program, "c4"),
      ],
    };

    const primaryVars = ["--gradient-color-1", "--gradient-color-2", "--gradient-color-3", "--gradient-color-4"];
    const fallbackVars = ["--gradientcolorzero", "--gradientcolorone", "--gradientcolortwo", "--gradientcolorthree"];
    const fallbackHex = ["#6ec3f4", "#3a3aff", "#ff61ab", "#E63946"];

    const parseColor = (varName, fallbackVar, defaultHex) => {
      const styles = getComputedStyle(canvas);
      const value =
        styles.getPropertyValue(varName).trim() ||
        styles.getPropertyValue(fallbackVar).trim() ||
        defaultHex;
      const hex = value.startsWith("#") ? value.slice(1) : value;
      const intVal = parseInt(hex, 16);
      return [
        ((intVal >> 16) & 255) / 255,
        ((intVal >> 8) & 255) / 255,
        (intVal & 255) / 255,
        1,
      ];
    };

    let colorCache = [];
    let lastColorUpdate = 0;
    const COLOR_CACHE_MS = 750;

    let canvasWidth = 0;
    let canvasHeight = 0;

    const updateViewport = () => {
      const { clientWidth, clientHeight } = canvas;
      if (clientWidth === canvasWidth && clientHeight === canvasHeight) return false;

      canvasWidth = clientWidth;
      canvasHeight = clientHeight;
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
      gl.viewport(0, 0, canvasWidth, canvasHeight);
      gl.uniform2f(uniformLocations.resolution, canvasWidth, canvasHeight);
      return true;
    };

    const updateColors = (force = false) => {
      const now = performance.now();
      if (!force && now - lastColorUpdate < COLOR_CACHE_MS && colorCache.length === 4) return;

      colorCache = primaryVars.map((varName, index) =>
        parseColor(varName, fallbackVars[index], fallbackHex[index])
      );
      colorCache.forEach((color, index) => {
        const location = uniformLocations.colors[index];
        if (location) {
          gl.uniform4fv(location, color);
        }
      });
      lastColorUpdate = now;
    };

    const draw = () => {
      updateViewport();
      updateColors();
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    };

    const targetFPS = 30;
    const frameInterval = 1000 / targetFPS;
    let lastFrameTime = 0;
    let animationFrame = null;
    let isAnimating = false;

    const render = (timestamp) => {
      if (!isAnimating) return;
      if (timestamp - lastFrameTime >= frameInterval) {
        draw();
        lastFrameTime = timestamp;
      }
      animationFrame = requestAnimationFrame(render);
    };

    const start = () => {
      if (isAnimating) return;
      isAnimating = true;
      lastFrameTime = 0;
      animationFrame = requestAnimationFrame(render);
    };

    const stop = () => {
      isAnimating = false;
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
        animationFrame = null;
      }
    };

    start();

    const resizeObserver = new ResizeObserver(() => {
      updateViewport();
      updateColors(true);
      draw();
    });
    resizeObserver.observe(canvas);

    const handleVisibility = () => {
      if (document.hidden) {
        stop();
      } else {
        start();
      }
    };

    window.addEventListener("visibilitychange", handleVisibility);
    window.addEventListener("blur", stop);
    window.addEventListener("focus", start);

    draw();

    this.cleanup = () => {
      stop();
      resizeObserver.disconnect();
      window.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("blur", stop);
      window.removeEventListener("focus", start);
    };
  }
}
