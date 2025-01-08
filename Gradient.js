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
let isAnimating = false;
const duration = 10000; // 10 seconds for a complete cycle

// Smooth animation function
function animate(currentTime) {
    try {
        if (!isAnimating) return;
        
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

        // Apply gradient
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Continue animation
        if (isAnimating) {
            animationFrame = requestAnimationFrame(animate);
        }
    } catch (error) {
        console.error('Animation error:', error);
        // Attempt to recover
        startTime = null;
        if (isAnimating) {
            animationFrame = requestAnimationFrame(animate);
        }
    }
}

// Start animation
function startAnimation() {
    if (!isAnimating) {
        isAnimating = true;
        startTime = null;
        animationFrame = requestAnimationFrame(animate);
    }
}

// Stop animation
function stopAnimation() {
    isAnimating = false;
    if (animationFrame) {
        cancelAnimationFrame(animationFrame);
        animationFrame = null;
    }
}

// Handle window resize
function handleResize() {
    setCanvasDimensions();
}

// Initialize
function init() {
    try {
        setCanvasDimensions();
        window.addEventListener('resize', handleResize);
        window.addEventListener('focus', startAnimation);
        window.addEventListener('blur', stopAnimation);
        // Start animation
        startAnimation();
    } catch (error) {
        console.error('Initialization error:', error);
        // Attempt to recover
        setTimeout(init, 1000);
    }
}

// Cleanup function
function cleanup() {
    stopAnimation();
    window.removeEventListener('resize', handleResize);
    window.removeEventListener('focus', startAnimation);
    window.removeEventListener('blur', stopAnimation);
}

// Start everything
document.addEventListener('DOMContentLoaded', init);

// Cleanup on page unload
window.addEventListener('unload', cleanup);
