# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 環境變數

- 後台網址(若無指定，則與前端網址相同)
  - REACT_APP_BACKEND_HOST="http://192.168.168.47:3000"

## Available Scripts

In the project directory, you can run:

### `npm start`

在開發模式中運行 app.\
打開 [http://localhost:3000](http://localhost:3000) 在瀏覽器查看

當 code 有改變時，網頁會重新載入.\
你可能會在控制台看到 lint 錯誤

### `npm run build`

你的 app 已準備好被部署囉！

查看 [deployment](https://facebook.github.io/create-react-app/docs/deployment) 獲得更多資訊.

### 網頁使用流程

#### 會員

- 註冊
  - 需使用 monospace 的會員信箱註冊，註冊完成後系統會寄信到信箱中，信件內容會包含一組**臨時密碼**，使用者可以透過此組密碼進行第一次登入
- 登入
  - 第一次登入後，網頁會跳轉到修改密碼的頁面，讓使用者修改自己想要的密碼，密碼修改成功後，會重新回到登入頁面讓使用者重新進行登入的動作
- 個人盆栽狀態顯示(每秒更新濕度及光照度)
- 租借盆器
  - 確認租借盆器後，系統會判斷是否還有空盆器，若有空盆器，系統會發送一封信件到會員信箱，信件內容會包含**植物資訊表單的網址**，使用者可進入網址填寫資訊; 若目前無空盆器，系統會自動將使用者排入後補名單，待有空盆器系統會將自動遞補，並發送植物資訊表單給使用者
- 忘記密碼
  - 使用者可輸入註冊時的信箱，系統會再寄一組**預設密碼**給使用者，讓使用者重新進行登入的動作

#### 管理員

- 查看目前盆器租借狀況
  - 包含已租借及未租借盆器數量
- 租借盆器的候補名單
- 目前已租借盆器的會員資料及植物資訊

  - 管理員可在此用 email 通知會員(e.g.植物濕度過低)

- 新增管理員
  - 輸入新管理員的姓名及信箱，新增後系統會寄信給新管理員，信件內容會包含一組**臨時密碼**，新管理員可以透過此組密碼跟會員進行相同的登入步驟
