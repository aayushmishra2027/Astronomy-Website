// 3D Black Hole using Three.js
function create3DObject(containerId, color) {
    const container = document.getElementById(containerId);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: color });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    camera.position.z = 5;

    function animate() {
        requestAnimationFrame(animate);
        sphere.rotation.x += 0.01;
        sphere.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();
}

create3DObject('blackhole-3d', 0x000000);
create3DObject('neutronstar-3d', 0xffffff);

// Image upload and display
document.getElementById('imageUpload').addEventListener('change', function (event) {
    const files = event.target.files;
    const gallery = document.getElementById('imageGallery');
    gallery.innerHTML = '';

    Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onload = function (e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            gallery.appendChild(img);
        };
        reader.readAsDataURL(file);
    });
});

// Modal functionality for clickable images
const images = document.querySelectorAll('.clickable-image');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modal-info');
const closeModal = document.querySelector('.close');

images.forEach(image => {
    image.addEventListener('click', () => {
        modalContent.textContent = image.getAttribute('data-info');
        modal.style.display = 'flex';
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});
