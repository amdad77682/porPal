'use client';
import { useEffect, useRef, ReactNode, useState } from 'react';
import { createPortal } from 'react-dom';

import { ScaleLoader } from 'react-spinners';

interface Props {
  children?: ReactNode;
}

const Portal = ({ children }: Props) => {
  const el = useRef(document.createElement('div'));

  useEffect(() => {
    const loaderRoot = document.querySelector('#__loader') as HTMLElement;
    // Use this in case CRA throws an error about react-hooks/exhaustive-deps
    const current = el.current;
    loaderRoot.appendChild(current);
    return () => void loaderRoot.removeChild(current);
  }, []);

  return createPortal(children, el.current);
};

const OverlayLoader = ({ isActive = false }: { isActive?: boolean }) => {
  const [isLoading, setLoader] = useState(isActive);

  useEffect(() => {
    document.addEventListener('loaderPortal', (e) => {
      const { detail } = e as unknown as { detail: { status: boolean } };
      setLoader(detail.status);
    });
    return document.removeEventListener('loaderPortal', () => {
      setLoader(false);
    });
  });
  return isLoading ? (
    <Portal>
      <div
        style={{
          position: 'fixed',
          zIndex: 51,
          background: '#00000033',
          height: '100%',
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        className="top-0 bottom-0 left-0 right-0 "
      >
        <div className="flex flex-col items-center justify-center">
          <ScaleLoader height={40} color={'white'} loading={true} />
          <p className="text-base font-semibold leading-loose text-white md:text-lg">
            Please wait ...
          </p>
        </div>
      </div>
    </Portal>
  ) : null;
};

export default OverlayLoader;
