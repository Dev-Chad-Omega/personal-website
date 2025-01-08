const canvas = document.getElementById('gradient-canvas');
const ctx = canvas.getContext('2d');

// Set initial dimensions
function setCanvasDimensions() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

// Get CSS variables for colors
function getGradientColors() {
    const computedStyle = getComputedStyle(canvas);
    return [
        computedStyle.getPropertyValue('--gradientcolorzero').trim(),
        computedStyle.getPropertyValue('--gradientcolorone').trim(),
        computedStyle.getPropertyValue('--gradientcolortwo').trim(),
        computedStyle.getPropertyValue('--gradientcolorthree').trim()
    ];
}

// Initialize animation variables
let animationFrame;
let startTime = null;
const duration = 10000; // 10 seconds for a complete cycle

// Smooth animation function
function animate(currentTime) {
    if (!startTime) startTime = currentTime;
    const elapsed = currentTime - startTime;
    const progress = (elapsed % duration) / duration;

    // Create gradient
    const gradient = ctx.createLinearGradient(
        canvas.width * (0.5 + 0.5 * Math.cos(progress * Math.PI * 2)),
        0,
        canvas.width * (0.5 + 0.5 * Math.sin(progress * Math.PI * 2)),
        canvas.height
    );

    // Add color stops with smooth transitions
    const colors = getGradientColors();
    colors.forEach((color, index) => {
        const offset = (index / (colors.length - 1) + Math.sin(progress * Math.PI * 2 + index) * 0.1) % 1;
        gradient.addColorStop(offset, color);
    });

    // Apply gradient without clearing
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Continue animation immediately
    animationFrame = requestAnimationFrame(animate);
}

// Handle window resize
function handleResize() {
    setCanvasDimensions();
}

// Initialize
function init() {
    setCanvasDimensions();
    window.addEventListener('resize', handleResize);
    // Start animation on next frame to ensure proper initialization
    requestAnimationFrame((time) => {
        startTime = time;
        animate(time);
    });
}

// Cleanup function
function cleanup() {
    window.removeEventListener('resize', handleResize);
    if (animationFrame) {
        cancelAnimationFrame(animationFrame);
    }
}

// Start everything
document.addEventListener('DOMContentLoaded', init);

// Cleanup on page unload
window.addEventListener('unload', cleanup);
