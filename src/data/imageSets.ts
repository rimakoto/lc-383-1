import type { ImageSet } from '../types/game';

const generateId = () => Math.random().toString(36).slice(2, 9);

const beachSceneLeft = `
<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="sky1" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#87CEEB"/>
      <stop offset="60%" style="stop-color:#FFD89B"/>
      <stop offset="100%" style="stop-color:#FF9A8B"/>
    </linearGradient>
    <linearGradient id="sea1" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#4ECDC4"/>
      <stop offset="100%" style="stop-color:#1A535C"/>
    </linearGradient>
    <linearGradient id="sand1" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#F7DC6F"/>
      <stop offset="100%" style="stop-color:#E9B44C"/>
    </linearGradient>
  </defs>
  <rect width="800" height="320" fill="url(#sky1)"/>
  <circle cx="650" cy="100" r="50" fill="#FFE66D"/>
  <circle cx="650" cy="100" r="70" fill="#FFE66D" opacity="0.3"/>
  <ellipse cx="120" cy="80" rx="60" ry="18" fill="white" opacity="0.9"/>
  <ellipse cx="150" cy="75" rx="45" ry="15" fill="white" opacity="0.9"/>
  <ellipse cx="90" cy="85" rx="35" ry="12" fill="white" opacity="0.85"/>
  <ellipse cx="450" cy="60" rx="55" ry="16" fill="white" opacity="0.85"/>
  <ellipse cx="480" cy="55" rx="40" ry="14" fill="white" opacity="0.85"/>
  <path d="M0,320 Q400,300 800,320 L800,450 L0,450 Z" fill="url(#sea1)"/>
  <path d="M0,340 Q200,330 400,345 Q600,355 800,340" stroke="white" stroke-width="3" fill="none" opacity="0.6"/>
  <path d="M0,370 Q200,360 400,375 Q600,385 800,370" stroke="white" stroke-width="2" fill="none" opacity="0.5"/>
  <rect y="430" width="800" height="170" fill="url(#sand1)"/>
  <path d="M50,500 L70,420 L90,500 Z" fill="#FF6B6B"/>
  <rect x="67" y="380" width="6" height="130" fill="#8B4513"/>
  <ellipse cx="150" cy="480" rx="40" ry="8" fill="#8B4513" opacity="0.6"/>
  <rect x="130" y="440" width="8" height="45" fill="#8B4513"/>
  <rect x="162" y="440" width="8" height="45" fill="#8B4513"/>
  <path d="M120,440 L170,440 L160,420 L130,420 Z" fill="#E74C3C"/>
  <circle cx="600" cy="470" r="20" fill="#F38181"/>
  <circle cx="600" cy="460" r="12" fill="#FCE38A"/>
  <path d="M588,470 Q600,485 612,470 L612,490 L588,490 Z" fill="#C0392B"/>
  <circle cx="250" cy="520" r="6" fill="#DEB887"/>
  <circle cx="275" cy="540" r="4" fill="#DEB887"/>
  <circle cx="300" cy="515" r="5" fill="#DEB887"/>
  <circle cx="700" cy="530" r="8" fill="#2ECC71"/>
  <ellipse cx="700" cy="520" rx="10" ry="6" fill="#27AE60"/>
  <ellipse cx="700" cy="510" rx="6" ry="4" fill="#1ABC9C"/>
  <path d="M400,560 L410,520 L420,560 Z" fill="#3498DB"/>
  <text x="50" y="580" font-family="Arial" font-size="14" fill="#8B4513" opacity="0.6">🏖️ Beach Day</text>
</svg>`;

const beachSceneRight = `
<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="sky2" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#87CEEB"/>
      <stop offset="60%" style="stop-color:#FFD89B"/>
      <stop offset="100%" style="stop-color:#FF9A8B"/>
    </linearGradient>
    <linearGradient id="sea2" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#4ECDC4"/>
      <stop offset="100%" style="stop-color:#1A535C"/>
    </linearGradient>
    <linearGradient id="sand2" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#F7DC6F"/>
      <stop offset="100%" style="stop-color:#E9B44C"/>
    </linearGradient>
  </defs>
  <rect width="800" height="320" fill="url(#sky2)"/>
  <circle cx="620" cy="100" r="50" fill="#FFE66D"/>
  <circle cx="620" cy="100" r="70" fill="#FFE66D" opacity="0.3"/>
  <ellipse cx="120" cy="80" rx="60" ry="18" fill="white" opacity="0.9"/>
  <ellipse cx="150" cy="75" rx="45" ry="15" fill="white" opacity="0.9"/>
  <ellipse cx="90" cy="85" rx="35" ry="12" fill="white" opacity="0.85"/>
  <ellipse cx="450" cy="60" rx="55" ry="16" fill="white" opacity="0.85"/>
  <ellipse cx="480" cy="55" rx="40" ry="14" fill="white" opacity="0.85"/>
  <path d="M0,320 Q400,300 800,320 L800,450 L0,450 Z" fill="url(#sea2)"/>
  <path d="M0,340 Q200,330 400,345 Q600,355 800,340" stroke="white" stroke-width="3" fill="none" opacity="0.6"/>
  <path d="M0,370 Q200,360 400,375 Q600,385 800,370" stroke="white" stroke-width="2" fill="none" opacity="0.5"/>
  <rect y="430" width="800" height="170" fill="url(#sand2)"/>
  <path d="M50,500 L70,420 L90,500 Z" fill="#4ECDC4"/>
  <rect x="67" y="380" width="6" height="130" fill="#8B4513"/>
  <ellipse cx="150" cy="480" rx="40" ry="8" fill="#8B4513" opacity="0.6"/>
  <rect x="130" y="440" width="8" height="45" fill="#8B4513"/>
  <rect x="162" y="440" width="8" height="45" fill="#8B4513"/>
  <path d="M120,440 L170,440 L160,420 L130,420 Z" fill="#3498DB"/>
  <circle cx="600" cy="470" r="20" fill="#F38181"/>
  <circle cx="600" cy="460" r="12" fill="#9B59B6"/>
  <path d="M588,470 Q600,485 612,470 L612,490 L588,490 Z" fill="#C0392B"/>
  <circle cx="250" cy="520" r="6" fill="#DEB887"/>
  <circle cx="275" cy="540" r="4" fill="#DEB887"/>
  <circle cx="700" cy="530" r="8" fill="#2ECC71"/>
  <ellipse cx="700" cy="520" rx="10" ry="6" fill="#27AE60"/>
  <ellipse cx="700" cy="510" rx="6" ry="4" fill="#1ABC9C"/>
  <path d="M400,560 L410,520 L420,560 Z" fill="#3498DB"/>
  <text x="50" y="580" font-family="Arial" font-size="14" fill="#8B4513" opacity="0.6">🏖️ Beach Day</text>
</svg>`;

const kitchenLeft = `
<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="wallk1" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#FDF2E9"/>
      <stop offset="100%" style="stop-color:#F5E6D3"/>
    </linearGradient>
    <linearGradient id="floor1" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#D4A373"/>
      <stop offset="100%" style="stop-color:#A0522D"/>
    </linearGradient>
  </defs>
  <rect width="800" height="420" fill="url(#wallk1)"/>
  <rect y="420" width="800" height="180" fill="url(#floor1)"/>
  <line x1="0" y1="420" x2="800" y2="420" stroke="#8B4513" stroke-width="3"/>
  <rect x="30" y="80" width="180" height="150" fill="#E67E22" rx="4" stroke="#D35400" stroke-width="2"/>
  <line x1="120" y1="80" x2="120" y2="230" stroke="#D35400" stroke-width="2"/>
  <line x1="30" y1="155" x2="210" y2="155" stroke="#D35400" stroke-width="2"/>
  <circle cx="110" cy="120" r="3" fill="#2C3E50"/>
  <circle cx="130" cy="120" r="3" fill="#2C3E50"/>
  <circle cx="110" cy="195" r="3" fill="#2C3E50"/>
  <circle cx="130" cy="195" r="3" fill="#2C3E50"/>
  <rect x="550" y="60" width="150" height="100" fill="#BDC3C7" rx="6" stroke="#7F8C8D" stroke-width="2"/>
  <circle cx="625" cy="100" r="25" fill="#2C3E50"/>
  <circle cx="625" cy="100" r="18" fill="#1A1A2E"/>
  <circle cx="625" cy="100" r="5" fill="#FFE66D"/>
  <rect x="580" y="170" width="90" height="40" fill="#95A5A6" rx="3"/>
  <rect x="100" y="310" width="600" height="120" fill="#2C3E50" rx="6"/>
  <rect x="100" y="310" width="600" height="15" fill="#F39C12" rx="4"/>
  <line x1="250" y1="325" x2="250" y2="430" stroke="#1A252F" stroke-width="2"/>
  <line x1="400" y1="325" x2="400" y2="430" stroke="#1A252F" stroke-width="2"/>
  <line x1="550" y1="325" x2="550" y2="430" stroke="#1A252F" stroke-width="2"/>
  <circle cx="325" cy="380" r="4" fill="#7F8C8D"/>
  <circle cx="475" cy="380" r="4" fill="#7F8C8D"/>
  <rect x="160" y="250" width="100" height="60" fill="#E74C3C" rx="3"/>
  <rect x="165" y="255" width="90" height="40" fill="#2C3E50"/>
  <circle cx="200" cy="275" r="8" fill="#E74C3C"/>
  <circle cx="225" cy="275" r="8" fill="#F39C12"/>
  <ellipse cx="500" cy="290" rx="40" ry="25" fill="#27AE60"/>
  <ellipse cx="490" cy="285" rx="8" ry="5" fill="#2ECC71" opacity="0.7"/>
  <path d="M350,280 Q360,250 370,280 Q380,250 390,280 L390,300 L350,300 Z" fill="#8B4513"/>
  <circle cx="680" cy="295" r="18" fill="#F8C471"/>
  <ellipse cx="680" cy="292" rx="15" ry="12" fill="#F5B041"/>
  <path d="M668,295 L692,295" stroke="#D35400" stroke-width="2"/>
  <path d="M670,302 L690,302" stroke="#D35400" stroke-width="2"/>
  <circle cx="450" cy="140" r="30" fill="#ECF0F1" stroke="#BDC3C7" stroke-width="3"/>
  <rect x="445" y="110" width="10" height="8" fill="#7F8C8D"/>
  <line x1="450" y1="140" x2="450" y2="118" stroke="#2C3E50" stroke-width="2"/>
  <line x1="450" y1="140" x2="468" y2="148" stroke="#2C3E50" stroke-width="2"/>
  <circle cx="450" cy="140" r="3" fill="#2C3E50"/>
</svg>`;

const kitchenRight = `
<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="wallk2" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#FDF2E9"/>
      <stop offset="100%" style="stop-color:#F5E6D3"/>
    </linearGradient>
    <linearGradient id="floor2" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#D4A373"/>
      <stop offset="100%" style="stop-color:#A0522D"/>
    </linearGradient>
  </defs>
  <rect width="800" height="420" fill="url(#wallk2)"/>
  <rect y="420" width="800" height="180" fill="url(#floor2)"/>
  <line x1="0" y1="420" x2="800" y2="420" stroke="#8B4513" stroke-width="3"/>
  <rect x="30" y="80" width="180" height="150" fill="#3498DB" rx="4" stroke="#2980B9" stroke-width="2"/>
  <line x1="120" y1="80" x2="120" y2="230" stroke="#2980B9" stroke-width="2"/>
  <line x1="30" y1="155" x2="210" y2="155" stroke="#2980B9" stroke-width="2"/>
  <circle cx="110" cy="120" r="3" fill="#2C3E50"/>
  <circle cx="130" cy="120" r="3" fill="#2C3E50"/>
  <circle cx="110" cy="195" r="3" fill="#2C3E50"/>
  <circle cx="130" cy="195" r="3" fill="#2C3E50"/>
  <rect x="550" y="60" width="150" height="100" fill="#BDC3C7" rx="6" stroke="#7F8C8D" stroke-width="2"/>
  <circle cx="625" cy="100" r="25" fill="#2C3E50"/>
  <circle cx="625" cy="100" r="18" fill="#1A1A2E"/>
  <circle cx="625" cy="100" r="5" fill="#F39C12"/>
  <rect x="580" y="170" width="90" height="40" fill="#95A5A6" rx="3"/>
  <rect x="100" y="310" width="600" height="120" fill="#2C3E50" rx="6"/>
  <rect x="100" y="310" width="600" height="15" fill="#F39C12" rx="4"/>
  <line x1="250" y1="325" x2="250" y2="430" stroke="#1A252F" stroke-width="2"/>
  <line x1="400" y1="325" x2="400" y2="430" stroke="#1A252F" stroke-width="2"/>
  <line x1="550" y1="325" x2="550" y2="430" stroke="#1A252F" stroke-width="2"/>
  <circle cx="325" cy="380" r="4" fill="#7F8C8D"/>
  <circle cx="475" cy="380" r="4" fill="#7F8C8D"/>
  <rect x="160" y="250" width="100" height="60" fill="#E74C3C" rx="3"/>
  <rect x="165" y="255" width="90" height="40" fill="#2C3E50"/>
  <circle cx="200" cy="275" r="8" fill="#27AE60"/>
  <circle cx="225" cy="275" r="8" fill="#F39C12"/>
  <ellipse cx="500" cy="290" rx="40" ry="25" fill="#E67E22"/>
  <ellipse cx="490" cy="285" rx="8" ry="5" fill="#F39C12" opacity="0.7"/>
  <path d="M350,280 Q360,250 370,280 Q380,250 390,280 L390,300 L350,300 Z" fill="#8B4513"/>
  <circle cx="680" cy="295" r="18" fill="#F8C471"/>
  <ellipse cx="680" cy="292" rx="15" ry="12" fill="#F5B041"/>
  <circle cx="450" cy="140" r="30" fill="#ECF0F1" stroke="#BDC3C7" stroke-width="3"/>
  <rect x="445" y="110" width="10" height="8" fill="#7F8C8D"/>
  <line x1="450" y1="140" x2="450" y2="118" stroke="#2C3E50" stroke-width="2"/>
  <line x1="450" y1="140" x2="468" y2="148" stroke="#2C3E50" stroke-width="2"/>
  <circle cx="450" cy="140" r="3" fill="#2C3E50"/>
</svg>`;

const gardenLeft = `
<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="skyg1" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#A8E6CF"/>
      <stop offset="100%" style="stop-color:#88D8B0"/>
    </linearGradient>
    <linearGradient id="grassg1" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#7CB342"/>
      <stop offset="100%" style="stop-color:#558B2F"/>
    </linearGradient>
  </defs>
  <rect width="800" height="380" fill="url(#skyg1)"/>
  <rect y="380" width="800" height="220" fill="url(#grassg1)"/>
  <ellipse cx="400" cy="380" rx="500" ry="40" fill="#689F38" opacity="0.4"/>
  <circle cx="680" cy="90" r="45" fill="#FFF9C4"/>
  <circle cx="680" cy="90" r="60" fill="#FFF9C4" opacity="0.3"/>
  <path d="M80,120 Q110,80 140,120 Q170,70 200,120 Q230,85 260,120 L260,140 L80,140 Z" fill="#5D4037"/>
  <ellipse cx="170" cy="80" rx="100" ry="60" fill="#2E7D32"/>
  <ellipse cx="130" cy="70" rx="50" ry="35" fill="#388E3C"/>
  <ellipse cx="210" cy="65" rx="55" ry="38" fill="#388E3C"/>
  <ellipse cx="170" cy="50" rx="45" ry="30" fill="#43A047"/>
  <rect x="430" y="280" width="6" height="120" fill="#6D4C41"/>
  <rect x="410" y="280" width="46" height="35" fill="#8D6E63" rx="3"/>
  <rect x="415" y="285" width="36" height="22" fill="#FFEB3B"/>
  <circle cx="150" cy="440" r="35" fill="#E91E63"/>
  <circle cx="150" cy="440" r="14" fill="#FFD54F"/>
  <ellipse cx="120" cy="435" rx="15" ry="10" fill="#F48FB1"/>
  <ellipse cx="180" cy="435" rx="15" ry="10" fill="#F48FB1"/>
  <ellipse cx="140" cy="415" rx="12" ry="8" fill="#F06292"/>
  <ellipse cx="160" cy="415" rx="12" ry="8" fill="#F06292"/>
  <rect x="147" y="470" width="6" height="50" fill="#33691E"/>
  <ellipse cx="550" cy="470" rx="28" ry="22" fill="#FF5722"/>
  <path d="M550,448 L545,430 L555,430 Z" fill="#4CAF50"/>
  <path d="M522,470 L578,470 L570,485 L530,485 Z" fill="#4CAF50"/>
  <circle cx="320" cy="450" r="22" fill="#FFEB3B"/>
  <ellipse cx="300" cy="445" rx="12" ry="10" fill="#FFF176"/>
  <ellipse cx="340" cy="445" rx="12" ry="10" fill="#FFF176"/>
  <ellipse cx="310" cy="430" rx="10" ry="8" fill="#FFF59D"/>
  <ellipse cx="330" cy="430" rx="10" ry="8" fill="#FFF59D"/>
  <circle cx="320" cy="450" r="8" fill="#8D6E63"/>
  <rect x="317" y="470" width="6" height="40" fill="#33691E"/>
  <ellipse cx="650" cy="490" rx="25" ry="18" fill="#9C27B0"/>
  <circle cx="650" cy="490" r="10" fill="#FFEB3B"/>
  <ellipse cx="630" cy="485" rx="10" ry="8" fill="#BA68C8"/>
  <ellipse cx="670" cy="485" rx="10" ry="8" fill="#BA68C8"/>
  <rect x="647" y="505" width="6" height="35" fill="#33691E"/>
  <path d="M0,550 Q50,540 100,550 Q150,560 200,550 Q250,540 300,550 Q350,560 400,550 Q450,540 500,550 Q550,560 600,550 Q650,540 700,550 Q750,560 800,550 L800,600 L0,600 Z" fill="#33691E" opacity="0.3"/>
  <ellipse cx="470" cy="180" rx="12" ry="18" fill="#E53935"/>
  <ellipse cx="490" cy="200" rx="12" ry="18" fill="#E53935"/>
  <ellipse cx="455" cy="205" rx="12" ry="18" fill="#E53935"/>
  <ellipse cx="475" cy="225" rx="12" ry="18" fill="#E53935"/>
  <path d="M480,195 L485,180 L490,195 Z" fill="#1B5E20"/>
  <ellipse cx="720" cy="500" rx="35" ry="25" fill="#8D6E63"/>
  <ellipse cx="720" cy="500" rx="30" ry="20" fill="#A1887F"/>
  <path d="M695,490 L705,470 L715,490 Z" fill="#66BB6A"/>
  <path d="M725,488 L735,465 L745,488 Z" fill="#66BB6A"/>
  <circle cx="720" cy="500" r="5" fill="#4E342E"/>
  <circle cx="710" cy="508" r="4" fill="#4E342E"/>
</svg>`;

const gardenRight = `
<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="skyg2" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#A8E6CF"/>
      <stop offset="100%" style="stop-color:#88D8B0"/>
    </linearGradient>
    <linearGradient id="grassg2" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#7CB342"/>
      <stop offset="100%" style="stop-color:#558B2F"/>
    </linearGradient>
  </defs>
  <rect width="800" height="380" fill="url(#skyg2)"/>
  <rect y="380" width="800" height="220" fill="url(#grassg2)"/>
  <ellipse cx="400" cy="380" rx="500" ry="40" fill="#689F38" opacity="0.4"/>
  <circle cx="700" cy="90" r="45" fill="#FFF9C4"/>
  <circle cx="700" cy="90" r="60" fill="#FFF9C4" opacity="0.3"/>
  <path d="M80,120 Q110,80 140,120 Q170,70 200,120 Q230,85 260,120 L260,140 L80,140 Z" fill="#5D4037"/>
  <ellipse cx="170" cy="80" rx="100" ry="60" fill="#2E7D32"/>
  <ellipse cx="130" cy="70" rx="50" ry="35" fill="#388E3C"/>
  <ellipse cx="210" cy="65" rx="55" ry="38" fill="#388E3C"/>
  <ellipse cx="170" cy="50" rx="45" ry="30" fill="#43A047"/>
  <rect x="430" y="280" width="6" height="120" fill="#6D4C41"/>
  <rect x="410" y="280" width="46" height="35" fill="#8D6E63" rx="3"/>
  <rect x="415" y="285" width="36" height="22" fill="#2196F3"/>
  <circle cx="150" cy="440" r="35" fill="#673AB7"/>
  <circle cx="150" cy="440" r="14" fill="#FFD54F"/>
  <ellipse cx="120" cy="435" rx="15" ry="10" fill="#CE93D8"/>
  <ellipse cx="180" cy="435" rx="15" ry="10" fill="#CE93D8"/>
  <ellipse cx="140" cy="415" rx="12" ry="8" fill="#BA68C8"/>
  <ellipse cx="160" cy="415" rx="12" ry="8" fill="#BA68C8"/>
  <rect x="147" y="470" width="6" height="50" fill="#33691E"/>
  <ellipse cx="550" cy="470" rx="28" ry="22" fill="#4CAF50"/>
  <path d="M550,448 L545,430 L555,430 Z" fill="#4CAF50"/>
  <path d="M522,470 L578,470 L570,485 L530,485 Z" fill="#4CAF50"/>
  <circle cx="320" cy="450" r="22" fill="#FFEB3B"/>
  <ellipse cx="300" cy="445" rx="12" ry="10" fill="#FFF176"/>
  <ellipse cx="340" cy="445" rx="12" ry="10" fill="#FFF176"/>
  <ellipse cx="310" cy="430" rx="10" ry="8" fill="#FFF59D"/>
  <ellipse cx="330" cy="430" rx="10" ry="8" fill="#FFF59D"/>
  <circle cx="320" cy="450" r="8" fill="#8D6E63"/>
  <rect x="317" y="470" width="6" height="40" fill="#33691E"/>
  <ellipse cx="650" cy="490" rx="25" ry="18" fill="#9C27B0"/>
  <circle cx="650" cy="490" r="10" fill="#FFEB3B"/>
  <ellipse cx="630" cy="485" rx="10" ry="8" fill="#BA68C8"/>
  <ellipse cx="670" cy="485" rx="10" ry="8" fill="#BA68C8"/>
  <rect x="647" y="505" width="6" height="35" fill="#33691E"/>
  <path d="M0,550 Q50,540 100,550 Q150,560 200,550 Q250,540 300,550 Q350,560 400,550 Q450,540 500,550 Q550,560 600,550 Q650,540 700,550 Q750,560 800,550 L800,600 L0,600 Z" fill="#33691E" opacity="0.3"/>
  <ellipse cx="470" cy="180" rx="12" ry="18" fill="#FF9800"/>
  <ellipse cx="490" cy="200" rx="12" ry="18" fill="#FF9800"/>
  <ellipse cx="455" cy="205" rx="12" ry="18" fill="#FF9800"/>
  <ellipse cx="475" cy="225" rx="12" ry="18" fill="#FF9800"/>
  <path d="M480,195 L485,180 L490,195 Z" fill="#1B5E20"/>
  <ellipse cx="720" cy="500" rx="35" ry="25" fill="#8D6E63"/>
  <ellipse cx="720" cy="500" rx="30" ry="20" fill="#A1887F"/>
  <path d="M695,490 L705,470 L715,490 Z" fill="#66BB6A"/>
  <path d="M725,488 L735,465 L745,488 Z" fill="#66BB6A"/>
  <circle cx="720" cy="500" r="5" fill="#4E342E"/>
  <circle cx="710" cy="508" r="4" fill="#4E342E"/>
</svg>`;

const livingRoomLeft = `
<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="wall1" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#FFE0B2"/>
      <stop offset="100%" style="stop-color:#FFCC80"/>
    </linearGradient>
    <linearGradient id="floorlv1" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#8D6E63"/>
      <stop offset="100%" style="stop-color:#6D4C41"/>
    </linearGradient>
  </defs>
  <rect width="800" height="400" fill="url(#wall1)"/>
  <rect y="400" width="800" height="200" fill="url(#floorlv1)"/>
  <line x1="0" y1="400" x2="800" y2="400" stroke="#5D4037" stroke-width="3"/>
  <rect x="280" y="50" width="240" height="180" fill="#81D4FA" stroke="#5D4037" stroke-width="6" rx="4"/>
  <line x1="400" y1="50" x2="400" y2="230" stroke="#5D4037" stroke-width="4"/>
  <line x1="280" y1="140" x2="520" y2="140" stroke="#5D4037" stroke-width="4"/>
  <circle cx="340" cy="95" r="20" fill="#FFF59D" opacity="0.7"/>
  <rect x="80" y="50" width="140" height="90" fill="#5D4037" rx="4"/>
  <rect x="90" y="60" width="120" height="70" fill="#FF7043"/>
  <circle cx="130" cy="95" r="15" fill="#FFC107"/>
  <circle cx="150" cy="110" r="10" fill="#9E9D24"/>
  <circle cx="175" cy="90" r="12" fill="#4FC3F7"/>
  <circle cx="195" cy="105" r="9" fill="#AB47BC"/>
  <rect x="180" y="220" width="440" height="130" fill="#6D4C41" rx="10"/>
  <rect x="190" y="230" width="420" height="40" fill="#FFAB91"/>
  <rect x="190" y="275" width="130" height="65" fill="#8D6E63"/>
  <rect x="330" y="275" width="130" height="65" fill="#8D6E63"/>
  <rect x="470" y="275" width="130" height="65" fill="#8D6E63"/>
  <circle cx="255" cy="307" r="4" fill="#3E2723"/>
  <circle cx="395" cy="307" r="4" fill="#3E2723"/>
  <circle cx="535" cy="307" r="4" fill="#3E2723"/>
  <ellipse cx="250" cy="350" rx="120" ry="25" fill="#FF7043" opacity="0.8"/>
  <ellipse cx="250" cy="345" rx="100" ry="18" fill="#FF8A65"/>
  <ellipse cx="550" cy="350" rx="120" ry="25" fill="#42A5F5" opacity="0.8"/>
  <ellipse cx="550" cy="345" rx="100" ry="18" fill="#64B5F6"/>
  <rect x="580" y="70" width="160" height="120" fill="#1A1A2E" rx="6" stroke="#37474F" stroke-width="4"/>
  <rect x="590" y="80" width="140" height="90" fill="#0D47A1"/>
  <rect x="595" y="85" width="130" height="80" fill="#1565C0"/>
  <circle cx="660" cy="125" r="20" fill="#FFEB3B" opacity="0.9"/>
  <rect x="630" y="140" width="60" height="20" fill="#2E7D32"/>
  <rect x="590" y="170" width="140" height="15" fill="#263238"/>
  <circle cx="605" cy="177" r="3" fill="#E53935"/>
  <circle cx="618" cy="177" r="3" fill="#FDD835"/>
  <circle cx="631" cy="177" r="3" fill="#43A047"/>
  <circle cx="680" cy="178" r="4" fill="#9E9E9E"/>
  <rect x="350" y="380" width="100" height="60" fill="#A1887F" rx="4"/>
  <rect x="340" y="440" width="15" height="60" fill="#5D4037"/>
  <rect x="445" y="440" width="15" height="60" fill="#5D4037"/>
  <circle cx="400" cy="405" r="16" fill="#FFAB91"/>
  <circle cx="400" cy="405" r="10" fill="#FF8A65"/>
  <path d="M398,380 L402,380 L402,395 L398,395 Z" fill="#6D4C41"/>
  <ellipse cx="620" cy="450" rx="80" ry="15" fill="#795548"/>
  <rect x="100" y="470" width="200" height="30" fill="#3E2723" rx="8"/>
  <ellipse cx="200" cy="470" rx="30" ry="12" fill="#5D4037"/>
  <rect x="190" y="465" width="20" height="10" fill="#FFC107" rx="2"/>
  <circle cx="250" cy="480" r="5" fill="#FFD54F"/>
</svg>`;

const livingRoomRight = `
<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="wall2" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#FFE0B2"/>
      <stop offset="100%" style="stop-color:#FFCC80"/>
    </linearGradient>
    <linearGradient id="floorlv2" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#8D6E63"/>
      <stop offset="100%" style="stop-color:#6D4C41"/>
    </linearGradient>
  </defs>
  <rect width="800" height="400" fill="url(#wall2)"/>
  <rect y="400" width="800" height="200" fill="url(#floorlv2)"/>
  <line x1="0" y1="400" x2="800" y2="400" stroke="#5D4037" stroke-width="3"/>
  <rect x="280" y="50" width="240" height="180" fill="#81D4FA" stroke="#5D4037" stroke-width="6" rx="4"/>
  <line x1="400" y1="50" x2="400" y2="230" stroke="#5D4037" stroke-width="4"/>
  <line x1="280" y1="140" x2="520" y2="140" stroke="#5D4037" stroke-width="4"/>
  <circle cx="460" cy="95" r="20" fill="#FFF59D" opacity="0.7"/>
  <rect x="80" y="50" width="140" height="90" fill="#5D4037" rx="4"/>
  <rect x="90" y="60" width="120" height="70" fill="#FF7043"/>
  <circle cx="130" cy="95" r="15" fill="#E91E63"/>
  <circle cx="150" cy="110" r="10" fill="#9E9D24"/>
  <circle cx="175" cy="90" r="12" fill="#4FC3F7"/>
  <circle cx="195" cy="105" r="9" fill="#AB47BC"/>
  <rect x="180" y="220" width="440" height="130" fill="#6D4C41" rx="10"/>
  <rect x="190" y="230" width="420" height="40" fill="#A5D6A7"/>
  <rect x="190" y="275" width="130" height="65" fill="#8D6E63"/>
  <rect x="330" y="275" width="130" height="65" fill="#8D6E63"/>
  <rect x="470" y="275" width="130" height="65" fill="#8D6E63"/>
  <circle cx="255" cy="307" r="4" fill="#3E2723"/>
  <circle cx="395" cy="307" r="4" fill="#3E2723"/>
  <circle cx="535" cy="307" r="4" fill="#3E2723"/>
  <ellipse cx="250" cy="350" rx="120" ry="25" fill="#FF7043" opacity="0.8"/>
  <ellipse cx="250" cy="345" rx="100" ry="18" fill="#FF8A65"/>
  <ellipse cx="550" cy="350" rx="120" ry="25" fill="#7E57C2" opacity="0.8"/>
  <ellipse cx="550" cy="345" rx="100" ry="18" fill="#9575CD"/>
  <rect x="580" y="70" width="160" height="120" fill="#1A1A2E" rx="6" stroke="#37474F" stroke-width="4"/>
  <rect x="590" y="80" width="140" height="90" fill="#0D47A1"/>
  <rect x="595" y="85" width="130" height="80" fill="#1565C0"/>
  <circle cx="660" cy="125" r="20" fill="#FFEB3B" opacity="0.9"/>
  <rect x="630" y="140" width="60" height="20" fill="#2E7D32"/>
  <rect x="590" y="170" width="140" height="15" fill="#263238"/>
  <circle cx="605" cy="177" r="3" fill="#E53935"/>
  <circle cx="618" cy="177" r="3" fill="#FDD835"/>
  <circle cx="631" cy="177" r="3" fill="#43A047"/>
  <circle cx="680" cy="178" r="4" fill="#4CAF50"/>
  <rect x="350" y="380" width="100" height="60" fill="#A1887F" rx="4"/>
  <rect x="340" y="440" width="15" height="60" fill="#5D4037"/>
  <rect x="445" y="440" width="15" height="60" fill="#5D4037"/>
  <circle cx="400" cy="405" r="16" fill="#FFAB91"/>
  <circle cx="400" cy="405" r="10" fill="#FF8A65"/>
  <path d="M398,380 L402,380 L402,395 L398,395 Z" fill="#6D4C41"/>
  <ellipse cx="620" cy="450" rx="80" ry="15" fill="#795548"/>
  <rect x="100" y="470" width="200" height="30" fill="#3E2723" rx="8"/>
  <ellipse cx="200" cy="470" rx="30" ry="12" fill="#5D4037"/>
  <rect x="190" y="465" width="20" height="10" fill="#FFC107" rx="2"/>
  <circle cx="250" cy="480" r="5" fill="#FFD54F"/>
</svg>`;

export const imageSets: ImageSet[] = [
  {
    id: generateId(),
    title: '阳光海滩',
    leftSvg: beachSceneLeft,
    rightSvg: beachSceneRight,
    differences: [
      { id: 1, leftX: 81.25, leftY: 16.67, rightX: 77.5,  rightY: 16.67, radius: 8.5 },
      { id: 2, leftX: 8.75,  leftY: 78.89, rightX: 8.75, rightY: 78.89, radius: 7.5 },
      { id: 3, leftX: 18.13, leftY: 71.67, rightX: 18.13, rightY: 71.67, radius: 6.5 },
      { id: 4, leftX: 75,    leftY: 76.67, rightX: 75,    rightY: 76.67, radius: 5.5 },
      { id: 5, leftX: 37.5,  leftY: 85.83, rightX: 37.5,  rightY: 85.83, radius: 6.5 },
    ],
  },
  {
    id: generateId(),
    title: '温馨厨房',
    leftSvg: kitchenLeft,
    rightSvg: kitchenRight,
    differences: [
      { id: 1, leftX: 15,    leftY: 25.83, rightX: 15,    rightY: 25.83, radius: 10.5 },
      { id: 2, leftX: 78.13, leftY: 16.67, rightX: 78.13, rightY: 16.67, radius: 5.5 },
      { id: 3, leftX: 25,    leftY: 45.83, rightX: 25,    rightY: 45.83, radius: 5.5 },
      { id: 4, leftX: 62.5,  leftY: 48.33, rightX: 62.5,  rightY: 48.33, radius: 7.5 },
      { id: 5, leftX: 85,    leftY: 49.67, rightX: 85,    rightY: 49.67, radius: 7.5 },
    ],
  },
  {
    id: generateId(),
    title: '秘密花园',
    leftSvg: gardenLeft,
    rightSvg: gardenRight,
    differences: [
      { id: 1, leftX: 85,    leftY: 15,    rightX: 87.5,  rightY: 15,    radius: 7 },
      { id: 2, leftX: 54.13, leftY: 49.33, rightX: 54.13, rightY: 49.33, radius: 6 },
      { id: 3, leftX: 18.75, leftY: 73.33, rightX: 18.75, rightY: 73.33, radius: 9 },
      { id: 4, leftX: 68.75, leftY: 78.33, rightX: 68.75, rightY: 78.33, radius: 7.5 },
      { id: 5, leftX: 59.06, leftY: 33.75, rightX: 59.06, rightY: 33.75, radius: 10 },
    ],
  },
  {
    id: generateId(),
    title: '舒适客厅',
    leftSvg: livingRoomLeft,
    rightSvg: livingRoomRight,
    differences: [
      { id: 1, leftX: 42.5,  leftY: 15.83, rightX: 57.5,  rightY: 15.83, radius: 7 },
      { id: 2, leftX: 16.25, leftY: 15.83, rightX: 16.25, rightY: 15.83, radius: 6 },
      { id: 3, leftX: 50,    leftY: 41.67, rightX: 50,    rightY: 41.67, radius: 13 },
      { id: 4, leftX: 68.75, leftY: 57.83, rightX: 68.75, rightY: 57.83, radius: 15 },
      { id: 5, leftX: 85,    leftY: 29.67, rightX: 85,    rightY: 29.67, radius: 4.5 },
    ],
  },
];

export function fisherYatesShuffle<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
