# LifecycleTest

本專案為一個用來觀察 Angular Component 生命週期的練習專案，使用 Angular CLI v15.2.5 建立。

## Development server

執行 `ng serve` 啟動開發伺服器。瀏覽器開啟 `http://localhost:4200/` 以查看專案。當你修改程式碼後，應用程式會自動重新載入。

## 專案目的

本專案透過父元件與子元件的互動，顯示 Angular 所有常見的生命週期函式（Lifecycle Hook）觸發順序，並使用 `console.log()` 印出對應順序與說明，幫助你理解其行為與應用時機。

## 包含的生命週期與說明

| 順序 | 生命週期函式              | 說明                                                                 |
|------|---------------------------|----------------------------------------------------------------------|
| 1️⃣   | `constructor()`          | 建構元件實例。此時尚未接收到 @Input，也無法操作 DOM。通常只做基本初始化。     |
| 2️⃣   | `ngOnChanges()`         | 每當 @Input 屬性變更時觸發（包括首次賦值）。可用於根據輸入變化更新狀態。         |
| 3️⃣   | `ngOnInit()`            | 元件初始化完成，適合在此發送 API 請求或處理初始化邏輯。                      |
| 4️⃣   | `ngDoCheck()`           | 自訂變更偵測邏輯的時機點。若需要對非 @Input 的資料作細緻觀察可使用此函式。        |
| 5️⃣   | `ngAfterContentInit()`  | 投影內容（ng-content）初始化完成時呼叫。                                     |
| 6️⃣   | `ngAfterContentChecked()`| 每次內容變更檢查後都會呼叫。                                               |
| 7️⃣   | `ngAfterViewInit()`     | 元件 View 和子元件 View 初始化完成。適合操作 DOM 或透過 ViewChild 取值。         |
| 8️⃣   | `ngAfterViewChecked()`  | 每次 View 變更檢查後觸發。                                                  |
| 9️⃣   | `ngOnDestroy()`         | 元件被銷毀前呼叫。用來清除訂閱、事件監聽、定時器等資源，避免記憶體洩漏。            |

## 使用方式

1. 點擊「切換子元件」按鈕可銷毀/建立子元件，觀察生命週期整個流程。
2. 點擊「變更 message」按鈕可觸發 @Input 變更，觀察 `ngOnChanges` 與其他對應函式觸發。
3. 開啟瀏覽器 Console 檢視訊息，對照生命週期函式順序。

## 目錄架構（精簡）

```
src/
  app/
    parent/
      parent.component.ts
      parent.component.html
    child/
      child.component.ts
      child.component.html
    app.component.html
```

