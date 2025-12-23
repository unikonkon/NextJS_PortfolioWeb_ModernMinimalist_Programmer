# 💻 Portfolio Techniques: Modern Minimalist × Programmer

> เทคนิคการออกแบบ Portfolio สำหรับ Programmer/Developer ที่เน้นสไตล์ Modern Minimalist ผสมกลิ่นอายของ Code Editor และ Terminal

---

## 🎨 Color Palette

| สี | Hex Code | การใช้งาน |
|---|----------|----------|
| Terminal Black | `#0d1117` | พื้นหลังหลัก (GitHub dark) |
| Editor Dark | `#161b22` | พื้นหลังรอง / Cards |
| Code Green | `#00ff9f` | Accent หลัก (Matrix feel) |
| Syntax Blue | `#58a6ff` | Links / Accent รอง |
| Syntax Purple | `#bd93f9` | Highlight keywords |
| Syntax Orange | `#ffab70` | Warning / Tags |
| Comment Gray | `#8b949e` | ข้อความรอง |
| White | `#f0f6fc` | ข้อความหลัก |

### Alternative Themes

**Dracula Theme:**
- Background: `#282a36`
- Purple: `#bd93f9`
- Green: `#50fa7b`
- Pink: `#ff79c6`

**One Dark:**
- Background: `#1e2127`
- Blue: `#61afef`
- Green: `#98c379`
- Orange: `#d19a66`

---

## 🔤 Typography

| ประเภท | Font แนะนำ | เหตุผล |
|--------|-----------|--------|
| Headings | Fira Code, JetBrains Mono | ดู code-like |
| Body | IBM Plex Sans, Source Sans Pro | อ่านง่าย technical |
| Code blocks | Fira Code, Cascadia Code | รองรับ ligatures |
| Accent | Space Mono, Roboto Mono | Terminal feel |

### Font Features
- เปิด `font-variant-ligatures` สำหรับ `=>`, `===`, `!==`
- ใช้ `letter-spacing: 0.02em` สำหรับ mono fonts
- Line height: `1.6` สำหรับ body, `1.4` สำหรับ code

---

## ✨ เทคนิคหลัก

### 1. Terminal/CLI Style Hero

| Element | รายละเอียด |
|---------|-----------|
| Prompt line | `> hello_world.exe` กระพริบ cursor |
| Typing effect | พิมพ์ข้อความทีละตัว |
| ASCII art | ชื่อหรือโลโก้แบบ ASCII |
| Command output | แสดงผลแบบ terminal response |
| Window chrome | ปุ่ม 🔴🟡🟢 ด้านบน |

### 2. Code Editor Layout

| Element | รายละเอียด |
|---------|-----------|
| Line numbers | เลขบรรทัดด้านซ้าย |
| Syntax highlighting | สี keyword, string, comment |
| Tab bar | แท็บไฟล์ด้านบน `.js` `.tsx` `.py` |
| File tree | Sidebar แสดง folder structure |
| Minimap | แถบ preview ด้านขวา (optional) |

### 3. GitHub-style Elements

| Element | รายละเอียด |
|---------|-----------|
| Contribution graph | ตาราง commit สีเขียว |
| Repo cards | การ์ดโปรเจกต์แบบ GitHub |
| Stats badges | `★ stars` `⎇ forks` `● issues` |
| Commit messages | แสดง commit history |
| Language dots | จุดสีบอกภาษา |

### 4. Matrix/Digital Effects

| Element | รายละเอียด |
|---------|-----------|
| Falling code | ตัวอักษร/เลขตกลงมาช้าๆ |
| Binary pattern | `01010` เป็นพื้นหลังจางๆ |
| Glitch text | ข้อความ glitch เป็นบางครั้ง |
| Scan lines | เส้นแนวนอนจางๆ |

---

## 🎬 Animations

| Animation | ใช้ตรงไหน | Effect |
|-----------|----------|--------|
| Typing/Typewriter | Hero text, titles | พิมพ์ทีละตัว + cursor กระพริบ |
| Blink cursor | หลังข้อความ | `▌` กระพริบ 1s interval |
| Code scroll | Background | Code เลื่อนขึ้นช้าๆ |
| Glitch effect | Hover, transitions | สั่น + สี RGB แยก |
| Fade in up | Content sections | เข้ามานุ่มนวล |
| Counter/Increment | Stats, numbers | นับเลขขึ้น |
| Progress bar | Skills | แถบโหลดเหมือน npm install |
| Compile animation | Page load | แสดง "compiling..." |

### Animation Timing
- Typing: `100ms` per character
- Cursor blink: `1s` interval
- Fade in: `0.6s` ease-out
- Hover transitions: `0.3s` ease

---

## 🖼️ Layout & Components

### Navigation Styles

| Style | รายละเอียด |
|-------|-----------|
| Tab bar | เหมือน browser tabs / editor tabs |
| Breadcrumb | `~/portfolio/about.md` |
| Command palette | กด `Ctrl+K` เปิด search modal |
| Numbered links | `01. about` `02. work` `03. contact` |

### Hero Section Options

| Style | ตัวอย่าง |
|-------|---------|
| Terminal window | หน้าต่าง terminal พร้อมปุ่ม 🔴🟡🟢 |
| Code snippet | แนะนำตัวเองเป็น code |
| JSON format | ข้อมูลตัวเองเป็น JSON object |
| Function | `function Developer() { return skills; }` |

### About Section Formats

```
- README.md format
- package.json style
- Config file (.env, yaml)
- Class/Object definition
- JSDoc comments
```

### Skills Section Styles

| Style | รายละเอียด |
|-------|-----------|
| npm install | `installing dependencies...` + progress |
| Import statements | `import { React, Node } from 'skills'` |
| Tech stack icons | โลโก้ภาษา/framework |
| Version badges | `React ^18.2.0` `Node >=18` |
| Skill tree | แผนผังแบบ dependency graph |
| Package.json | dependencies list format |

### Projects Section Styles

| Style | รายละเอียด |
|-------|-----------|
| Repo cards | ชื่อ + description + language dot |
| Terminal output | `ls -la projects/` |
| Git log | Commit history ของโปรเจกต์ |
| Code preview | Snippet จากโปรเจกต์จริง |
| README preview | แสดง README.md ของโปรเจกต์ |

### Contact Section Styles

| Style | รายละเอียด |
|-------|-----------|
| Form as Code | Input เป็น variable assignment |
| API endpoint | `POST /api/contact` |
| Git commit | "Submit" = "git push" |
| Console output | `console.log('Message sent!')` |

---

## 🛠️ Micro-interactions

| Interaction | Effect |
|-------------|--------|
| Hover link | Underline animation left-to-right |
| Hover card | Border glow สีเขียว/ฟ้า |
| Hover button | Background compile/loading effect |
| Copy code | Click to copy + "Copied!" toast |
| Toggle theme | Dark/Light mode switch animation |
| Cursor | Custom cursor รูป `>_` หรือ pointer |
| Scroll | Smooth scroll + progress indicator |

---

## 🌟 Decorative Elements

| Element | ลักษณะ |
|---------|--------|
| Line numbers | เลขบรรทัดจางๆ ด้านข้าง content |
| Grid dots | จุด dot grid พื้นหลัง |
| Corner brackets | `[ ]` มุมของ sections |
| Code comments | `// section start` จางๆ |
| Syntax symbols | `{ }` `< />` `=>` ลอยประดับ |
| Status bar | ด้านล่างแสดง "UTF-8" "LF" "Ln 42" |
| Custom scrollbar | แบบ VS Code (thin, subtle) |
| Cursor trail | หางตาม cursor (optional) |

---

## 📱 Responsive Design

| หน้าจอ | ปรับแต่ง |
|--------|---------|
| Desktop (1200px+) | Full terminal UI, sidebar visible, all animations |
| Tablet (768-1199px) | Collapse sidebar, maintain code style, reduce effects |
| Mobile (<768px) | Simplified terminal, stack layout, minimal animations |

### Mobile Considerations
- ปิด custom cursor
- ลด particle effects
- ใช้ hamburger menu
- Stack columns vertically
- ลดขนาด font เล็กน้อย

---

## 🎯 Do's and Don'ts

### ✅ ควรทำ

- ใช้ monospace font สำหรับ code elements
- Dark theme เป็นหลัก (พร้อม light mode option)
- แสดง real code snippets จากโปรเจกต์จริง
- GitHub integration แสดง activity
- Terminal aesthetics ที่ functional
- Syntax highlighting ที่ถูกต้อง
- Technical language ที่เหมาะสม
- Fast loading + good performance

### ❌ หลีกเลี่ยง

- Font ธรรมดาทั่วไป (Arial, Times)
- สีสดใสเกินไป
- ใช้แค่รูปภาพแทน real code
- ไม่มี social proof (GitHub, LinkedIn)
- Generic card layouts ที่ไม่มี character
- Plain text ทั้งหมดไม่มี highlighting
- Marketing speak แทน technical content
- Heavy animations ที่ทำให้ช้า

---

## 🔧 Technical Features

| Feature | รายละเอียด |
|---------|-----------|
| Dark/Light toggle | สลับ theme ได้ + remember preference |
| Keyboard shortcuts | `Ctrl+K` search, `G H` go home |
| View source easter egg | Comment พิเศษใน source code |
| Console message | `console.log` ต้อนรับใน DevTools |
| Performance | โหลดเร็ว, Lighthouse score 90+ |
| SEO + Meta | Open Graph, Twitter cards |
| Analytics | แสดง visitor count (optional) |
| PWA | Installable, offline support |

---

## 📋 Section Checklist

```
□ Hero        → Terminal window + typing effect
□ About       → README.md หรือ JSON format  
□ Skills      → npm install / import statements
□ Projects    → GitHub repo cards + code preview
□ Experience  → Git commit timeline
□ Blog        → Markdown style posts (optional)
□ Contact     → API/Form hybrid
□ Footer      → Status bar style
```

---

## 🎨 Visual Reference

```
┌─────────────────────────────────────────────────────────┐
│ 🔴 🟡 🟢  portfolio.dev — zsh                    ─ □ ✕ │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  $ cat about.json                                       │
│                                                         │
│  {                                                      │
│    "name": "Your Name",                                 │
│    "role": "Full Stack Developer",                      │
│    "location": "Bangkok, Thailand",                     │
│    "skills": ["React", "Node.js", "TypeScript"],        │
│    "experience": "5+ years",                            │
│    "available": true                                    │
│  }▌                                                     │
│                                                         │
│  $ ls projects/                                         │
│  > e-commerce/  dashboard/  mobile-app/  api/          │
│                                                         │
│  [View Projects]  [Download CV]  [Contact]              │
│                                                         │
├─────────────────────────────────────────────────────────┤
│ main ✓  UTF-8  LF  Ln 42, Col 1        TypeScript  📡  │
└─────────────────────────────────────────────────────────┘
```

---

## 🛠️ Recommended Tech Stack

### Frontend
- **Framework:** Next.js, Astro, SvelteKit
- **Styling:** Tailwind CSS, CSS Modules
- **Animation:** Framer Motion, GSAP
- **Icons:** Lucide, Phosphor Icons

### Deployment
- **Hosting:** Vercel, Netlify, GitHub Pages
- **Domain:** Namecheap, Cloudflare
- **Analytics:** Plausible, Umami (privacy-friendly)

### Integration
- **GitHub API:** แสดง repos, contributions
- **Dev.to/Hashnode API:** แสดง blog posts
- **Spotify API:** Now playing (optional)

---

## 📚 Resources & Inspiration

### Fonts
- [Google Fonts - Fira Code](https://fonts.google.com/specimen/Fira+Code)
- [JetBrains Mono](https://www.jetbrains.com/lp/mono/)
- [Cascadia Code](https://github.com/microsoft/cascadia-code)

### Color Schemes
- [Dracula Theme](https://draculatheme.com/)
- [One Dark Pro](https://github.com/Binaryify/OneDark-Pro)
- [GitHub Dark](https://github.com/primer/primitives)

### Animation Libraries
- [Framer Motion](https://www.framer.com/motion/)
- [GSAP](https://greensock.com/gsap/)
- [Typed.js](https://github.com/mattboldt/typed.js/)

### Inspiration Sites
- [Brittany Chiang](https://brittanychiang.com/)
- [Lee Robinson](https://leerob.io/)
- [Josh Comeau](https://www.joshwcomeau.com/)

---

## ✍️ Final Tips

1. **Keep it simple** - Minimalist ไม่ได้แปลว่าน่าเบื่อ แค่ตัดสิ่งที่ไม่จำเป็นออก
2. **Show real work** - แสดงโปรเจกต์จริง code จริง ไม่ใช่แค่ mockup
3. **Performance first** - Portfolio ที่โหลดช้า = ประทับใจแรกที่แย่
4. **Mobile friendly** - Recruiter อาจดูจากมือถือ
5. **Update regularly** - เพิ่มโปรเจกต์ใหม่ อัพเดท skills
6. **Personal touch** - ใส่ personality ลงไป ไม่ใช่แค่ template

---

> 🚀 *"Your portfolio is not just a showcase, it's a demonstration of your skills in action."*

---

*สร้างโดย Claude AI | Last updated: December 2024*
