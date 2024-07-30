document.addEventListener('DOMContentLoaded', function() {
    // Black Hole 3D Model
    const blackholeContainer = document.getElementById('blackhole-container');
    const blackholeScene = new THREE.Scene();
    const blackholeCamera = new THREE.PerspectiveCamera(75, blackholeContainer.clientWidth / blackholeContainer.clientHeight, 0.1, 1000);
    const blackholeRenderer = new THREE.WebGLRenderer({ alpha: true });

    blackholeRenderer.setSize(blackholeContainer.clientWidth, blackholeContainer.clientHeight);
    blackholeContainer.appendChild(blackholeRenderer.domElement);

    const geometry = new THREE.TorusGeometry(5, 2, 16, 100);
    const material = new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: true });
    const torus = new THREE.Mesh(geometry, material);

    blackholeScene.add(torus);

    blackholeCamera.position.z = 20;

    function animateBlackhole() {
        requestAnimationFrame(animateBlackhole);

        torus.rotation.x += 0.01;
        torus.rotation.y += 0.01;

        blackholeRenderer.render(blackholeScene, blackholeCamera);
    }

    animateBlackhole();

    // Neutron Star 3D Model
    const neutronstarContainer = document.getElementById('neutronstar-container');
    const neutronstarScene = new THREE.Scene();
    const neutronstarCamera = new THREE.PerspectiveCamera(75, neutronstarContainer.clientWidth / neutronstarContainer.clientHeight, 0.1, 1000);
    const neutronstarRenderer = new THREE.WebGLRenderer({ alpha: true });

    neutronstarRenderer.setSize(neutronstarContainer.clientWidth, neutronstarContainer.clientHeight);
    neutronstarContainer.appendChild(neutronstarRenderer.domElement);

    const starGeometry = new THREE.SphereGeometry(5, 32, 32);
    const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffd700, wireframe: true });
    const star = new THREE.Mesh(starGeometry, starMaterial);

    neutronstarScene.add(star);

    neutronstarCamera.position.z = 20;

    function animateNeutronStar() {
        requestAnimationFrame(animateNeutronStar);

        star.rotation.x += 0.01;
        star.rotation.y += 0.01;

        neutronstarRenderer.render(neutronstarScene, neutronstarCamera);
    }

    animateNeutronStar();
});

