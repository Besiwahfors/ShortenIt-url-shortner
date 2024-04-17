import React, { useState, useEffect } from 'react';
import QrCode from 'react-qr-code';

const QRCode = ({ shortCode }) => {
  const [qrCodeUrl, setQRCodeUrl] = useState('');

  useEffect(() => {
    const fetchQRCode = async () => {
      try {
        const response = await fetch(`/api/links/${shortCode}/qr`);
        const data = await response.json();
        setQRCodeUrl(data.qrCodeUrl);
      } catch (error) {
        console.error(error);
      }
    };

    fetchQRCode();
  }, [shortCode]);

  return (
    <div>
      <QrCode value={qrCodeUrl} />
    </div>
  );
};

export default QRCode;
