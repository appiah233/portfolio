import { ImageResponse } from 'next/og'

export const alt = 'Eric Appiah Owusu | Technical Consultant'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%', height: '100%', background: '#0b0f17', color: '#f8fafc', padding: '72px 88px', borderLeft: '18px solid #ef4444' }}>
        <div style={{ color: '#f87171', fontSize: 29 }}>TECHNICAL CONSULTANT · ACCRA, GHANA</div>
        <div style={{ marginTop: 18, fontWeight: 700, fontSize: 78 }}>Eric Appiah Owusu</div>
        <div style={{ marginTop: 18, color: '#cbd5e1', fontSize: 33 }}>Microsoft 365 · Identity · Automation</div>
        <div style={{ marginTop: 72, color: '#cbd5e1', fontSize: 25 }}>ericappiah.com</div>
      </div>
    ),
    size,
  )
}
