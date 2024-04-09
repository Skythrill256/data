'use client';

import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { useSearchParams } from 'next/navigation';

const QRCodePage = () => {
  const searchParams = useSearchParams();
  const qrData = searchParams.get('qrData');
  const [qrCodeDataURL, setQrCodeDataURL] = useState('');

  useEffect(() => {
    const generateQRCode = async () => {
      try {
        if (qrData) {
          const dataURL = await QRCode.toDataURL(qrData);
          setQrCodeDataURL(dataURL);
        }
      } catch (err) {
        console.error('Error generating QR code:', err);
      }
    };

    generateQRCode();
  }, [qrData]);

  return (
    <div>
      {qrCodeDataURL && <img src={qrCodeDataURL} alt="QR Code" />}
    </div>
  );
};

export default QRCodePage;