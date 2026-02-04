'use client'

export const useFBPixel = () => {
  const trackPurchase = () => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Purchase', {
        currency: 'BRL',
        value: 0.00, // Valor simbólico ou real se houver
      });
      console.log('Meta Pixel: Purchase event tracked');
    }
  };

  return { trackPurchase };
};
