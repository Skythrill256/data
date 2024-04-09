"use client"
'use client';
"use client"
import React, { useState } from 'react';
import QRCode from 'qrcode';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Source from '../../assets/Source.svg';
import Button from '../components/button/button';
import Navbar from '../components/navbar/navbar';

const Page = () => {
  const router = useRouter();
  const [productDescription, setProductDescription] = useState('');
  const [quantity, setQuantity] = useState('');
  const [qrCodeData, setQrCodeData] = useState('');

  const handleGenerateQRCode = () => {
    const qrData = `Product Description: ${productDescription}\nQuantity: ${quantity}`;
    router.push(`/qrcode?qrData=${encodeURIComponent(qrData)}`);
  };

  const handleQrCodeGenerated = (data) => {
    setQrCodeData(data);
  };

  return (
    <div className="maincontainer">
      <Image src={Source} width={300} height={300} className="source" />
      <div className="container">
        <label>Product Description</label>
        <input
          type="text"
          className="input"
          placeholder="Enter the details"
          onChange={(e) => setProductDescription(e.target.value)}
          value={productDescription}
        />
        <label>Quantity</label>
        <input
          type="text"
          className="input"
          placeholder="Enter the details"
          onChange={(e) => setQuantity(e.target.value)}
          value={quantity}
        />
      </div>
      <Button title="Generate QR Code" onClick={handleGenerateQRCode} />
      <Navbar />
      {qrCodeData && <img src={qrCodeData} alt="QR Code" />}
    </div>
  );
};

export default Page;
