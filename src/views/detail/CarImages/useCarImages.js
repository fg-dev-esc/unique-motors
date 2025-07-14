import { useState, useEffect, useRef } from 'react';
import { useCarDetail } from '../useCarDetail';
import carImagesData from './carImagesData.json';

export const useCarImages = () => {
  const { car, loading, error } = useCarDetail();
  const [tick, setTick] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [panPosition, setPanPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const sliderRef = useRef();

  // Timer effect for auction countdown
  useEffect(() => {
    const interval = setInterval(() => setTick(t => t + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!showModal) return;
      
      switch(event.keyCode) {
        case 27: // ESC
          closeModal();
          break;
        case 37: // Left arrow
          navigateImage('prev');
          break;
        case 39: // Right arrow
          navigateImage('next');
          break;
        case 187: // + (zoom in)
        case 61:  // + without shift
          event.preventDefault();
          handleZoom(0.2);
          break;
        case 189: // - (zoom out)
          event.preventDefault();
          handleZoom(-0.2);
          break;
        default:
          break;
      }
    };
    
    if (showModal) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [showModal, currentImageIndex]);

  // Initialize Owl Carousel when car.imagenes changes
  useEffect(() => {
    if (car && car.imagenes && window.$ && window.$(sliderRef.current).owlCarousel) {
      window.$(sliderRef.current).owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        margin: 0,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        items: 1,
        navText: [
          "<i class='far fa-long-arrow-left'></i>",
          "<i class='far fa-long-arrow-right'></i>"
        ],
      });
    }
  }, [car]);

  const openModal = (img, index) => {
    setSelectedImage(img);
    setCurrentImageIndex(index);
    setZoomLevel(1);
    setPanPosition({ x: 0, y: 0 });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImage(null);
    setZoomLevel(1);
    setPanPosition({ x: 0, y: 0 });
  };

  const navigateImage = (direction) => {
    if (!car.imagenes || car.imagenes.length === 0) return;
    
    let newIndex;
    if (direction === 'next') {
      newIndex = currentImageIndex === car.imagenes.length - 1 ? 0 : currentImageIndex + 1;
    } else {
      newIndex = currentImageIndex === 0 ? car.imagenes.length - 1 : currentImageIndex - 1;
    }
    
    setCurrentImageIndex(newIndex);
    setSelectedImage(car.imagenes[newIndex]);
    setZoomLevel(1);
    setPanPosition({ x: 0, y: 0 });
    
    // Synchronize with carousel
    if (window.$ && window.$(sliderRef.current).trigger) {
      window.$(sliderRef.current).trigger('to.owl.carousel', [newIndex, 300]);
    }
  };

  const constrainPan = (newZoom, currentPan) => {
    if (newZoom <= 1) {
      return { x: 0, y: 0 };
    }

    // Calcular los límites basados en el zoom
    const container = { width: window.innerWidth * 0.8, height: window.innerHeight * 0.8 };
    const imageSize = { width: container.width * newZoom, height: container.height * newZoom };
    
    // Máximo desplazamiento permitido
    const maxPanX = Math.max(0, (imageSize.width - container.width) / 2);
    const maxPanY = Math.max(0, (imageSize.height - container.height) / 2);
    
    return {
      x: Math.max(-maxPanX, Math.min(maxPanX, currentPan.x)),
      y: Math.max(-maxPanY, Math.min(maxPanY, currentPan.y))
    };
  };

  const handleZoom = (delta) => {
    setZoomLevel(prev => {
      const newZoom = Math.max(0.5, Math.min(3, prev + delta));
      
      // Ajustar la posición de pan según el nuevo zoom
      setPanPosition(currentPan => constrainPan(newZoom, currentPan));
      
      return newZoom;
    });
  };

  const handleMouseDown = (e) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - panPosition.x, y: e.clientY - panPosition.y });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging && zoomLevel > 1) {
      const newPan = {
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      };
      setPanPosition(constrainPan(zoomLevel, newPan));
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    if (zoomLevel > 1 && e.touches.length === 1) {
      setIsDragging(true);
      const touch = e.touches[0];
      setDragStart({ x: touch.clientX - panPosition.x, y: touch.clientY - panPosition.y });
    }
  };

  const handleTouchMove = (e) => {
    if (isDragging && zoomLevel > 1 && e.touches.length === 1) {
      e.preventDefault();
      const touch = e.touches[0];
      const newPan = {
        x: touch.clientX - dragStart.x,
        y: touch.clientY - dragStart.y
      };
      setPanPosition(constrainPan(zoomLevel, newPan));
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleThumbnailClick = (img, index) => {
    // Navigate in the carousel
    if (window.$ && window.$(sliderRef.current).trigger) {
      window.$(sliderRef.current).trigger('to.owl.carousel', [index, 300]);
    }
    // Open modal with full image
    openModal(img, index);
  };

  const isAuctionActive = () => {
    if (!car) return false;
    if (car.fechaFin) {
      const end = new Date(car.fechaFin);
      return end > new Date();
    }
    if (car.activo !== undefined) return car.activo;
    return false;
  };

  const getAuctionEndDate = () => {
    if (!car) return null;
    return car.fechaFin || car.fechaVencimiento;
  };

  return {
    data: carImagesData,
    car,
    loading,
    error,
    tick,
    showModal,
    selectedImage,
    currentImageIndex,
    zoomLevel,
    panPosition,
    isDragging,
    sliderRef,
    isAuctionActive: isAuctionActive(),
    getAuctionEndDate: getAuctionEndDate(),
    openModal,
    closeModal,
    navigateImage,
    handleZoom,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handleThumbnailClick
  };
};