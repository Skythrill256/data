
import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect, useState } from "react";



function QrScannerComp() {
  const [scanResult, setScanResult] = useState(null)

  useEffect(()=>{
    const scanner = new Html5QrcodeScanner('reader',{
      qrbox: {
        width: 250,
        height: 250
      },
      fps: 10,
    })
  
    scanner.render(success, error) ;
    function success(data){
      scanner.clear();
      setScanResult(data);
      
    }
    function error(error){
      console.log(error)
    }
  },[])
  
  return (
    <div>
      <div id="reader"></div>
      <p>{scanResult}</p>
    </div>
  )
}

export default QrScannerComp