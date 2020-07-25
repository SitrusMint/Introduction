window.addEventListener("DOMContentLoaded", init);

function init() {
    const width = 960;
    const height = 540;

    //レンダラーの作成（雛形？）
    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector("#myCanvas")
    });
    
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);

    //シーンの作成（場所の作成）
    const scene = new THREE.Scene();

    //カメラの作成
    const camera = new THREE.PerspectiveCamera(
        45,
        width / height,
        1,
        10000
    );
    camera.position.set(0, 0, +1000);

    //立方体のジオメトリの作成(形？)
    const geometry = new THREE.BoxGeometry(500, 500, 500);

    //立方体のマテリアル作成(質感)
    const material = new THREE.MeshStandardMaterial({
        color: 0x0000ff
    });

    //立方体の作成
    const box = new THREE.Mesh(geometry, material);
    //そして追加
    scene.add(box);

    //ライトの作成
    const light = new THREE.DirectionalLight(0xffffff);
    light.intensity = 2;    // 光の強さが二倍
    //ライトの位置変更
    light.position.set(1, 1, 1);
    scene.add(light);

    tick();

    function tick() {
        requestAnimationFrame(tick);

	//箱の回転
	box.rotation.x += 0.01;
	box.rotation.y += 0.01;

	//レンダリング
	renderer.render(scene, camera);
    }
}

