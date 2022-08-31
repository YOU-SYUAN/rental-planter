# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### 網頁使用流程

#### 會員

- 註冊
  需使用 monospace 的會員信箱註冊，註冊完成後系統會寄信到信箱中，信件內容會包含一組**預設密碼**，使用者可以透過此組密碼進行第一次登入
- 登入
  第一次登入後，網頁會跳轉到修改密碼的頁面，讓使用者修改自己想要的密碼，密碼修改成功後，會重新回到登入頁面讓使用者重新進行登入的動作
- 個人盆栽狀態顯示(每秒更新溫度及光照度)
- 租借盆器
  確認租借盆器後，系統會判斷是否還有空盆器，若有空盆器，系統會發送一封信件到會員信箱，信件內容會包含**植物資訊表單的網址**，使用者可進入網址填寫資訊; 若目前無空盆器，系統會自動將使用者排入後補名單，待有空盆器系統會將自動遞補，並發送植物資訊表單給使用者
- 忘記密碼
  使用者可輸入註冊時的信箱，系統會再寄一組**預設密碼**給使用者，讓使用者重新進行登入的動作

#### 管理員

- 查看目前盆器租借狀況
  包含已租借及未租借盆器數量
- 租借盆器的候補名單
- 目前已租借盆器的會員資料及植物資訊
  管理員可在此用 email 通知會員(e.g.植物濕度過低)

- 新增管理員
  輸入新管理員的姓名及信箱，新增後系統會寄信給新管理員，信件內容會包含一組**預設密碼**，新管理員可以透過此組密碼跟會員進行相同的登入步驟
