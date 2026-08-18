import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const ThreeCanvasHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    let renderer: THREE.WebGLRenderer;
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let gridGroup: THREE.Group;
    let reqId: number;

    try {
      scene = new THREE.Scene();

      const width = container.clientWidth || 600;
      const height = container.clientHeight || 600;

      camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
      camera.position.z = 8;

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);

      // Digital UI Elements - Representing Web Design & SaaS
      gridGroup = new THREE.Group();
      scene.add(gridGroup);

      const panelCount = 12;
      const panels: THREE.Mesh[] = [];

      for (let i = 0; i < panelCount; i++) {
        const w = 0.8 + Math.random() * 1.2;
        const h = 0.5 + Math.random() * 0.8;
        const geometry = new THREE.PlaneGeometry(w, h);
        
        const material = new THREE.MeshPhysicalMaterial({
          color: 0x050505,
          metalness: 0.9,
          roughness: 0.1,
          emissive: 0x00F0FF,
          emissiveIntensity: 0.2,
          transparent: true,
          opacity: 0.9,
          side: THREE.DoubleSide
        });

        const panel = new THREE.Mesh(geometry, material);
        panel.position.x = (Math.random() - 0.5) * 6;
        panel.position.y = (Math.random() - 0.5) * 4;
        panel.position.z = (Math.random() - 0.5) * 2;
        
        // Initial random rotation
        panel.rotation.x = Math.random() * Math.PI;
        panel.rotation.y = Math.random() * Math.PI;
        
        gridGroup.add(panel);
        panels.push(panel);

        // Add "Code Lines" or "UI Accents" to panels
        const edgeGeo = new THREE.EdgesGeometry(geometry);
        const edgeMat = new THREE.LineBasicMaterial({ color: 0x00F0FF, transparent: true, opacity: 0.5 });
        const edges = new THREE.LineSegments(edgeGeo, edgeMat);
        panel.add(edges);
        
        // Add a small "Button" or "Heading" placeholder on each panel
        const markerGeo = new THREE.PlaneGeometry(w * 0.4, 0.05);
        const markerMat = new THREE.MeshBasicMaterial({ color: 0x00F0FF, transparent: true, opacity: 0.8 });
        const marker = new THREE.Mesh(markerGeo, markerMat);
        marker.position.z = 0.01;
        marker.position.y = h * 0.3;
        panel.add(marker);
      }

      // Background particles
      const particleGeo = new THREE.BufferGeometry();
      const count = 300;
      const posArray = new Float32Array(count * 3);
      for (let i = 0; i < count * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 20;
      }
      particleGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
      const particleMat = new THREE.PointsMaterial({
        size: 0.03,
        color: 0x00F0FF,
        transparent: true,
        opacity: 0.3
      });
      const particles = new THREE.Points(particleGeo, particleMat);
      scene.add(particles);

      // Lights
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);

      const neonLight = new THREE.PointLight(0x00F0FF, 10, 15);
      neonLight.position.set(0, 0, 5);
      scene.add(neonLight);

      // Mouse tracking
      let mouseX = 0;
      let mouseY = 0;

      const handlePointerMove = (e: MouseEvent) => {
        const rect = container.getBoundingClientRect();
        mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * -2;
      };

      window.addEventListener('mousemove', handlePointerMove);

      const animate = () => {
        reqId = requestAnimationFrame(animate);
        const time = performance.now() * 0.001;

        // Individual panel animations
        panels.forEach((panel, i) => {
          // Floating motion
          panel.position.y += Math.sin(time + i) * 0.002;
          panel.position.x += Math.cos(time + i * 0.5) * 0.001;

          // React to mouse: panels orient towards cursor
          const targetX = mouseX * 3;
          const targetY = mouseY * 2;
          
          const dx = targetX - panel.position.x;
          const dy = targetY - panel.position.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Rotate towards mouse
          panel.lookAt(targetX, targetY, 5);
          
          // Hover effect
          const hoverEffect = Math.max(0, 1 - dist / 3);
          panel.scale.set(1 + hoverEffect * 0.3, 1 + hoverEffect * 0.3, 1 + hoverEffect * 0.3);
          
          if (panel.material instanceof THREE.MeshPhysicalMaterial) {
            panel.material.emissiveIntensity = 0.2 + hoverEffect * 2;
            panel.material.opacity = 0.6 + hoverEffect * 0.4;
          }
        });

        particles.rotation.y = time * 0.01;
        particles.rotation.x = time * 0.005;
        
        neonLight.position.x = mouseX * 5;
        neonLight.position.y = mouseY * 5;

        renderer.render(scene, camera);
      };

      animate();

      const resizeObserver = new ResizeObserver((entries) => {
        for (let entry of entries) {
          const w = entry.contentRect.width;
          const h = entry.contentRect.height;
          if (w && h && camera && renderer) {
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            renderer.setSize(w, h);
          }
        }
      });
      resizeObserver.observe(container);

      return () => {
        window.removeEventListener('mousemove', handlePointerMove);
        cancelAnimationFrame(reqId);
        resizeObserver.disconnect();
        if (container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
        renderer.dispose();
      };
    } catch (err) {
      setHasError(true);
    }
  }, []);

  if (hasError) {
    return (
      <div className="w-full h-full flex items-center justify-center p-8 relative">
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl border border-[#00F0FF]/30 bg-neutral-900 flex items-center justify-center relative shadow-[0_0_50px_rgba(0,240,255,0.1)]">
          <div className="text-center p-4">
            <span className="font-mono text-xs text-[#00F0FF] tracking-widest block mb-2 uppercase">System Matrix</span>
            <span className="font-syne text-2xl font-bold text-white tracking-tight uppercase">Digital Core</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <div ref={containerRef} className="w-full h-[400px] sm:h-[500px] md:h-[600px] relative z-10" />
      
      {/* Decorative Overlays */}
      <div className="absolute inset-0 pointer-events-none border border-white/5 m-8 rounded-3xl" />
      <div className="absolute top-8 left-8 font-mono text-[10px] text-white/40 uppercase">+ System_Grid: SaaS_Architecture</div>
      <div className="absolute top-8 right-8 font-mono text-[10px] text-[#00F0FF] uppercase">● Interactive_Core</div>
      <div className="absolute bottom-8 left-8 font-mono text-[10px] text-white/30 uppercase">Latency: 1ms // Render: WebGL_2</div>
      <div className="absolute bottom-8 right-8 font-mono text-[10px] text-white/40 uppercase">[ID: 86808]</div>
    </div>
  );
};
