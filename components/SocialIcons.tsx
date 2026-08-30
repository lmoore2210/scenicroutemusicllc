import React from 'react';

export function SpotifyIcon({ size = 16, color = "#1DB954" }: { size?: number; color?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.498 17.306c-.215.353-.674.464-1.027.248-2.812-1.718-6.353-2.107-10.523-1.155-.403.092-.808-.16-.9-.564-.092-.404.16-.808.564-.9 4.568-1.044 8.49-.604 11.638 1.344.353.216.464.674.248 1.027zm1.468-3.264c-.27.44-.847.579-1.287.31-3.219-1.978-8.125-2.55-11.933-1.393-.497.151-1.026-.134-1.177-.63-.151-.497.134-1.027.63-1.178 4.356-1.322 9.776-.684 13.457 1.583.44.27.579.847.31 1.288zm.126-3.41c-3.86-2.292-10.228-2.503-13.898-1.388-.592.18-1.222-.154-1.402-.746-.18-.592.154-1.222.746-1.402 4.225-1.283 11.258-1.037 15.688 1.593.533.316.708 1.008.392 1.541-.316.533-1.008.708-1.541.392z" />
    </svg>
  );
}

export function YouTubeIcon({ size = 16, color = "#FF0000" }: { size?: number; color?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export function InstagramIcon({ size = 16, color = "#E1306C" }: { size?: number; color?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default InstagramIcon;
