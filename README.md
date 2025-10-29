# Việt Nam 1954-1964: Nội chiến hay Giải phóng dân tộc?

## Giới thiệu

Đây là sản phẩm môn học **Lịch sử Đảng Cộng sản Việt Nam** - một website tương tác phân tích giai đoạn lịch sử quan trọng 1954-1964 ở Việt Nam, tập trung vào việc so sánh hai quan điểm về tính chất của cuộc đấu tranh trong thời kỳ này.

## 🌟 Đặc điểm nổi bật

### 🚀 Công nghệ hiện đại
- **React 18** với TypeScript
- **Vite** cho performance tối ưu
- **Tailwind CSS** cho styling hiện đại
- **Framer Motion** cho animations mượt mà
- **Lucide React** cho icon system

### 🎯 Tính năng tương tác
- **Timeline AI Interactive**: Phát tự động các sự kiện lịch sử với AI insights
- **Smart Search Engine**: Tìm kiếm thông minh với AI suggestions
- **Responsive Design**: Tối ưu cho mọi thiết bị
- **Smooth Animations**: Trải nghiệm người dùng mượt mà

### 📚 Nội dung đầy đủ
- **Dòng thời gian chi tiết**: 10 sự kiện quan trọng (1954-1964)
- **Phân tích so sánh**: Hai quan điểm "Nội chiến" vs "Giải phóng dân tộc"
- **Tài liệu lịch sử**: 15+ nguồn tham khảo đáng tin cậy
- **Kết luận khoa học**: Dựa trên phân tích dữ kiện khách quan

## 📁 Cấu trúc dự án

```
vietnam-history-1954-1964/
├── src/
│   ├── components/          # UI Components
│   │   ├── Navbar.tsx
│   │   ├── InteractiveTimeline.tsx
│   │   └── SearchEngine.tsx
│   ├── pages/              # Main Pages
│   │   ├── HomePage.tsx
│   │   ├── TimelinePage.tsx
│   │   ├── AnalysisPage.tsx
│   │   ├── ConclusionPage.tsx
│   │   └── DocumentsPage.tsx
│   ├── data/               # Data Layer
│   │   ├── timelineData.ts
│   │   ├── analysisData.ts
│   │   └── documentsData.ts
│   ├── types/              # TypeScript Types
│   │   └── index.ts
│   └── styles/             # Styling
│       ├── index.css
│       └── App.css
├── public/                 # Static Assets
# Việt Nam 1954-1964: Nội chiến hay Giải phóng dân tộc?

Một trang web tương tác phục vụ cho nghiên cứu và giảng dạy về giai đoạn 1954-1964 ở Việt Nam. Dự án này tập trung vào phân tích hai quan điểm chính về tính chất cuộc đấu tranh và cung cấp tài liệu tham khảo, timeline, và một trợ lý AI chuyên sâu cho giai đoạn 1954-1965.

---------------------------------

## Giữ repo sạch để push

Trước khi push lên remote, những phần tạm thời / dev-only đã được loại bỏ. Những thứ cần giữ khi push include:

- `src/` (ứng dụng React, components, pages)
- `public/` (assets tĩnh)
- `package.json`, `package-lock.json` (hoặc `pnpm-lock.yaml` / `yarn.lock`)
- `README.md`
- `.gitignore` (chứa `.env`)

Đã xóa: các script thử nghiệm tạm (`scripts/test_gemini.mjs`) và các file dev tạm thời.

---------------------------------

## Cài đặt nhanh & chạy (dev)

Yêu cầu môi trường
- Node.js 18+ (khuyến nghị 20.19+ hoặc 22.12+ để tương thích với Vite)
- npm hoặc yarn

Install
```powershell
npm install
```

Chạy dev server
```powershell
npm run dev
```

Build production
```powershell
npm run build
```

---------------------------------

## Cấu hình AI Assistant (Gemini)

### 🔑 **Bước 1: Lấy API Key**
1. Truy cập: https://makersuite.google.com/app/apikey
2. Đăng nhập tài khoản Google
3. Tạo API key mới
4. Copy API key

### 📝 **Bước 2: Tạo file `.env`**
Tạo file `.env` trong thư mục gốc của dự án:

```properties
# .env (local only - KHÔNG commit file này!)
VITE_GEMINI_API_KEY=your_actual_api_key_here
```

### ⚠️ **Lưu ý quan trọng:**
- **KHÔNG commit file `.env`** lên GitHub (đã được gitignore)
- **Mỗi thành viên** cần tạo file `.env` riêng với API key của mình
- **Bảo mật API key** - không chia sẻ với người khác

### 🔧 **Bước 3: Khởi động lại server**
```bash
npm run dev
```

### 📊 **Model hỗ trợ:**
- Ưu tiên: `gemini-2.5-flash`
- Dự phòng: `gemini-1.5`, `gemini-1.0`, `text-bison-001`

---------------------------------

## Ghi chú kỹ thuật ngắn

- Trợ lý AI (`src/lib/ai/gemini.ts`) sử dụng SDK Google Generative AI và sẽ gọi model được cấu hình (mặc định `gemini-2.5-flash`).
- Debug thông tin (prompt preview, timing, lỗi) được ghi vào `console` (không in vào chat UI) để tránh leak secrets.
- Các lỗi TypeScript không liên quan đã được dọn (unused imports/variables).

---------------------------------

## Push checklist

1. Đảm bảo `.env` không nằm trong commit.
2. Chạy `npm run build` để kiểm tra lỗi build (local). Node >= 20.19.0 hoặc >=22.12.0 được khuyến nghị.
3. Commit và push.

Nếu bạn muốn, tôi có thể thêm một script `prepush` để kiểm tra `npm run build` trước khi push.

---

Nếu cần chỉnh sửa README thêm (thêm hướng dẫn deploy, CI, hoặc secrets management), cho tôi biết nội dung bạn muốn thêm và tôi sẽ cập nhật.
