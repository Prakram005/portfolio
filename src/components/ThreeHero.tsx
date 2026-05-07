"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeHero() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;

    if (!mount) {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 0.4, 7.2);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setClearColor(0x06080d, 1);
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.95);
    const keyLight = new THREE.DirectionalLight(0x9be8ff, 2.1);
    keyLight.position.set(3, 4, 5);
    const warmLight = new THREE.PointLight(0xffb86c, 12, 12);
    warmLight.position.set(-3.5, -1.5, 3);
    scene.add(ambientLight, keyLight, warmLight);

    const coreGeometry = new THREE.IcosahedronGeometry(1.38, 2);
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0x6ee7d8,
      emissive: 0x123f3b,
      emissiveIntensity: 0.45,
      roughness: 0.35,
      metalness: 0.45,
    });
    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    group.add(core);

    const wire = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.43, 2),
      new THREE.MeshBasicMaterial({
        color: 0xf8d28a,
        wireframe: true,
        transparent: true,
        opacity: 0.32,
      }),
    );
    group.add(wire);

    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.18,
      side: THREE.DoubleSide,
    });
    const rings = [2.3, 2.85, 3.35].map((radius, index) => {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(radius, 0.012, 8, 160),
        ringMaterial.clone(),
      );
      ring.rotation.x = Math.PI / (2.6 + index * 0.2);
      ring.rotation.y = index * 0.55;
      group.add(ring);
      return ring;
    });

    const panelMaterial = new THREE.MeshStandardMaterial({
      color: 0x111827,
      emissive: 0x061118,
      emissiveIntensity: 0.55,
      roughness: 0.18,
      metalness: 0.2,
      transparent: true,
      opacity: 0.82,
    });

    const panels = [
      [-2.25, 0.95, -0.65, -0.34],
      [2.25, 0.72, -0.3, 0.32],
      [-1.6, -1.45, 0.38, 0.18],
      [1.55, -1.32, 0.28, -0.18],
    ].map(([x, y, z, rotation]) => {
      const panel = new THREE.Mesh(
        new THREE.BoxGeometry(1.55, 0.86, 0.045),
        panelMaterial.clone(),
      );
      panel.position.set(x, y, z);
      panel.rotation.y = rotation;
      group.add(panel);
      return panel;
    });

    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 220;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i += 1) {
      positions[i * 3] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 5;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3),
    );

    const particles = new THREE.Points(
      particleGeometry,
      new THREE.PointsMaterial({
        color: 0x9be8ff,
        size: 0.018,
        transparent: true,
        opacity: 0.55,
      }),
    );
    scene.add(particles);

    let frame = 0;
    let animationId = 0;

    const resize = () => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    const animate = () => {
      frame += 0.01;
      core.rotation.x += 0.003;
      core.rotation.y += 0.006;
      wire.rotation.x -= 0.002;
      wire.rotation.y += 0.004;
      rings.forEach((ring, index) => {
        ring.rotation.z += 0.0025 + index * 0.001;
      });
      panels.forEach((panel, index) => {
        panel.position.y += Math.sin(frame + index) * 0.0018;
        panel.rotation.x = Math.sin(frame * 0.7 + index) * 0.06;
      });
      particles.rotation.y -= 0.0008;
      group.rotation.y = Math.sin(frame * 0.45) * 0.18;
      group.rotation.x = Math.cos(frame * 0.36) * 0.08;
      renderer.render(scene, camera);
      animationId = window.requestAnimationFrame(animate);
    };

    resize();
    animate();
    window.addEventListener("resize", resize);

    return () => {
      window.cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      mount.removeChild(renderer.domElement);
      renderer.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
      wire.geometry.dispose();
      (wire.material as THREE.Material).dispose();
      ringMaterial.dispose();
      panelMaterial.dispose();
      particleGeometry.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="h-[420px] w-full overflow-hidden rounded-lg border border-white/10 bg-[radial-gradient(circle_at_50%_35%,rgba(110,231,216,0.22),rgba(8,11,18,0)_48%),linear-gradient(145deg,#06080d,#111827_48%,#080b12)] shadow-2xl shadow-cyan-950/30 sm:h-[560px] lg:h-[660px]"
      aria-label="Animated 3D portfolio visual"
      role="img"
    />
  );
}
