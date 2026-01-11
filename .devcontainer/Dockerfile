# 自訂 Dockerfile（可選）
FROM node:20

# 安裝額外工具
RUN apt-get update && apt-get install -y \
    git \
    curl \
    vim \
    && rm -rf /var/lib/apt/lists/*

# 設定工作目錄
WORKDIR /workspace

# 安裝全域 npm 套件
RUN npm install -g pnpm
