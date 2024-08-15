// Wait for the user to press a key
document.addEventListener('keydown', (event) => {
    // Capture the key event and report .code, .key, and .which values
    let output = document.getElementById('output');
    output.innerHTML = `
        <p>Key Code (event.code): <strong>${event.code}</strong></p>
        <p>Key (event.key): <strong>${event.key}</strong></p>
        <p>Which (event.which): <strong>${event.which}</strong></p>
    `;
});

document.addEventListener('mousemove', (event) => {
    // Capture the X and Y coordinates of the mouse pointer
    let x = event.clientX;
    let y = event.clientY;
    
    // Display the coordinates in the #coordinates div
    let coordinates = document.getElementById('coordinates');
    coordinates.textContent = `X: ${x}, Y: ${y}`;
});