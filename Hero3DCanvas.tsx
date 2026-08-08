import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Hero3DCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Canvas & Scene setup
    const scene = new THREE.Scene();
    
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group holding the futuristic 3D core object
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // Geometry 1: Outer Wireframe Icosahedron (Representing CODE)
    const icoGeo = new THREE.IcosahedronGeometry(2, 1);
    const icoMat = new THREE.MeshBasicMaterial({
      color: 0x52525b,
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });
    const icoMesh = new THREE.Mesh(icoGeo, icoMat);
    coreGroup.add(icoMesh);

    // Geometry 2: Inner Octahedron (Representing DESIGN)
    const octaGeo = new THREE.OctahedronGeometry(1.3, 0);
    const octaMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.2,
      metalness: 0.8,
      wireframe: true,
      transparent: true,
      opacity: 0.6
    });
    const octaMesh = new THREE.Mesh(octaGeo, octaMat);
    coreGroup.add(octaMesh);

    // Geometry 3: Inner Glow Sphere (Representing IDEAS)
    const sphereGeo = new THREE.IcosahedronGeometry(0.7, 2);
    const sphereMat = new THREE.MeshStandardMaterial({
      color: 0x10b981,
      emissive: 0x059669,
      emissiveIntensity: 0.5,
      roughness: 0.1,
      metalness: 0.9,
      transparent: true,
      opacity: 0.8
    });
    const sphereMesh = new THREE.Mesh(sphereGeo, sphereMat);
    coreGroup.add(sphereMesh);

    // Particle Ring (Representing EXPERIENCE)
    const particleCount = 200;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const radius = 2.8 + Math.random() * 0.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI * 0.5;
      positions[i * 3] = radius * Math.cos(theta) * Math.cos(phi);
      positions[i * 3 + 1] = radius * Math.sin(phi);
      positions[i * 3 + 2] = radius * Math.sin(theta) * Math.cos(phi);
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xa1a1aa,
      size: 0.03,
      transparent: true,
      opacity: 0.6
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    coreGroup.add(particleSystem);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x10b981, 2, 20);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x6366f1, 2, 20);
    pointLight2.position.set(-5, -5, -2);
    scene.add(pointLight2);

    // Interaction target variables
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let scrollY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      mouseX = (x / container.clientWidth) * 2 - 1;
      mouseY = -(y / container.clientHeight) * 2 + 1;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    // Resize Observer
    const resizeObserver = new ResizeObserver(() => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    });
    resizeObserver.observe(container);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse follow interpolation
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Rotate geometries
      icoMesh.rotation.y = elapsedTime * 0.2;
      icoMesh.rotation.x = elapsedTime * 0.1;

      octaMesh.rotation.y = -elapsedTime * 0.35;
      octaMesh.rotation.z = elapsedTime * 0.15;

      sphereMesh.rotation.y = elapsedTime * 0.5;

      particleSystem.rotation.y = elapsedTime * 0.1;

      // Mouse tilt reaction
      coreGroup.rotation.x = targetY * 0.5;
      coreGroup.rotation.y = targetX * 0.5;

      // Signature Interaction: Scroll transform bridging HERO -> PORTFOLIO
      const maxScroll = 1200;
      const scrollFactor = Math.min(scrollY / maxScroll, 1);

      // Morphing object scale and position on scroll
      coreGroup.position.y = -scrollFactor * 2.5;
      coreGroup.position.x = scrollFactor * 2.0;
      coreGroup.scale.set(
        1 - scrollFactor * 0.3,
        1 - scrollFactor * 0.3,
        1 - scrollFactor * 0.3
      );

      // Color shift on scroll
      if (icoMat) {
        icoMat.opacity = Math.max(0.35 - scrollFactor * 0.2, 0.05);
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      resizeObserver.disconnect();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      scene.clear();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[450px] md:min-h-[600px] relative pointer-events-auto cursor-grab active:cursor-grabbing"
    />
  );
};
