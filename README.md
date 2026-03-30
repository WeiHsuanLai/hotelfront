# Hotel Front-end (Vuetify Project)

這是基於 Vue 3、Vite 和 Vuetify 構建的飯店前端管理系統。

## 技術棧 (Tech Stack)

- **框架**: [Vue 3](https://vuejs.org/)
- **建構工具**: [Vite](https://vitejs.dev/)
- **UI 框架**: [Vuetify 3](https://vuetifyjs.com/)
- **路由**: [Vue Router](https://router.vuejs.org/) (使用 `unplugin-vue-router` 自動路由)
- **狀態管理**: [Pinia](https://pinia.vuejs.org/)
- **表單驗證**: [VeeValidate](https://vee-validate.logaretm.com/v4/) + [Yup](https://github.com/jquense/yup)

## 目錄結構

- `src/pages`: 包含所有的路由視圖組件。
  - 本專案支援**自動路由生成**，在 `pages` 資料夾中建立 `.vue` 檔案將自動對應到 URL 路徑。
- `src/components`: 存放可重用的 UI 組件。
- `src/layouts`: 頁面佈局模板（如 `admin` 和 `default`）。
- `src/stores`: Pinia 狀態管理。
- `src/plugins`: Vuetify 及其他插件配置。

## 開始使用

### 安裝依賴
```bash
npm install
```

### 啟動開發伺服器
```bash
npm run dev
```

### 編譯並壓縮用於生產環境
```bash
npm run build
```

### 代碼檢查 (Linting)
```bash
npm run lint
```
