#!/bin/bash
# setup-env.sh - Script hướng dẫn setup environment

echo "🚀 Thiết lập môi trường cho dự án Việt Nam 1954-1965"
echo ""

# Kiểm tra file .env đã tồn tại chưa
if [ -f ".env" ]; then
    echo "✅ File .env đã tồn tại!"
    echo "📝 Nội dung hiện tại:"
    cat .env
    echo ""
    read -p "Bạn có muốn cập nhật API key không? (y/n): " update
    if [ "$update" = "y" ] || [ "$update" = "Y" ]; then
        echo "🔑 Nhập API key mới:"
        read -p "VITE_GEMINI_API_KEY=" api_key
        echo "VITE_GEMINI_API_KEY=$api_key" > .env
        echo "✅ Đã cập nhật API key!"
    fi
else
    echo "📝 Tạo file .env..."
    echo "🔑 Nhập API key của bạn:"
    read -p "VITE_GEMINI_API_KEY=" api_key
    echo "VITE_GEMINI_API_KEY=$api_key" > .env
    echo "✅ Đã tạo file .env!"
fi

echo ""
echo "🎯 Bước tiếp theo:"
echo "1. Chạy: npm run dev"
echo "2. Mở trình duyệt và test AI Assistant"
echo ""
echo "⚠️  Lưu ý: KHÔNG commit file .env lên GitHub!"
