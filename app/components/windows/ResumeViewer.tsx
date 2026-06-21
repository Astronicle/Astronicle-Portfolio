'use client';
import { useState, useEffect } from 'react';

export function ResumeViewer() {
  const [zoom, setZoom] = useState(100);
  const [pdfSupported, setPdfSupported] = useState(true);

  // Check if browser can render PDFs in iframes
  useEffect(() => {
    const ua = navigator.userAgent;
    // Firefox and Chrome support inline PDFs; Safari is hit or miss
    const isSafari = /^((?!chrome|android).)*safari/i.test(ua);
    if (isSafari) setPdfSupported(false);
  }, []);

  const pdfUrl = '/resume.pdf';

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#1a1a1a' }}>
      {/* Toolbar */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10,
        padding: '8px 16px', borderBottom: '1px solid rgba(255,255,255,0.07)',
        background: '#111', flexShrink: 0,
      }}>
        {pdfSupported && (
          <>
            <button
              onClick={() => setZoom(z => Math.max(60, z - 10))}
              style={{ width: 28, height: 28, borderRadius: 6, border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.06)', color: '#fff', cursor: 'pointer', fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >−</button>
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12, width: 44, textAlign: 'center', fontFamily: 'monospace' }}>{zoom}%</span>
            <button
              onClick={() => setZoom(z => Math.min(150, z + 10))}
              style={{ width: 28, height: 28, borderRadius: 6, border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.06)', color: '#fff', cursor: 'pointer', fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >+</button>
            <div style={{ width: 1, height: 18, background: 'rgba(255,255,255,0.1)' }} />
          </>
        )}
        <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: 12 }}>Abdul_Rehman_resume.pdf</span>
        <a
          href={pdfUrl}
          download="Abdul_Rehman_resume.pdf"
          style={{
            marginLeft: 'auto', padding: '6px 16px', borderRadius: 8,
            border: '1px solid rgba(99,102,241,0.5)',
            background: 'rgba(99,102,241,0.18)',
            color: '#a5b4fc', fontSize: 12, fontWeight: 600,
            cursor: 'pointer', textDecoration: 'none',
            display: 'flex', alignItems: 'center', gap: 6,
          }}
        >
          ↓ Download PDF
        </a>
      </div>

      {/* PDF Viewer */}
      <div style={{ flex: 1, overflow: 'auto', background: '#2a2a2a', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '24px 16px', gap: 16 }}>
        {pdfSupported ? (
          <iframe
            src={`${pdfUrl}#zoom=${zoom}`}
            style={{
              width: `${Math.min(100, zoom)}%`,
              maxWidth: 860,
              minWidth: 480,
              height: `${Math.max(700, zoom * 9)}px`,
              border: 'none',
              borderRadius: 4,
              boxShadow: '0 8px 48px rgba(0,0,0,0.6)',
              background: '#fff',
            }}
            title="Resume PDF"
          />
        ) : (
          /* Fallback for Safari */
          <div style={{ textAlign: 'center', padding: 40 }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>📄</div>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, marginBottom: 24 }}>
              Your browser doesn&apos;t support inline PDF viewing.
            </p>
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ padding: '10px 24px', borderRadius: 10, background: 'rgba(99,102,241,0.25)', border: '1px solid rgba(99,102,241,0.5)', color: '#a5b4fc', textDecoration: 'none', fontSize: 14 }}
            >
              Open PDF in new tab ↗
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
