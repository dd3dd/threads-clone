# threads-clone

盡可能實現 threads 網頁版的功能及外觀，練習前後端開發技能

### Framework & Library & Tool

Next.js, Tailwind CSS, NextAuth.js, Prisma, Supabase

### 目前功能

#### 登入

(Instagram API 似乎無法用於驗證，因此改用 GitHub)
![login](https://github.com/user-attachments/assets/249eefe5-224d-44bc-936a-b9d22f229006)

若是初次登入的使用者，會在 Supabase 新增該使用者的資料
![userinfo](https://github.com/user-attachments/assets/5afd1e1a-7061-4f42-9498-1bb88f9f9658)

#### 建立貼文

登入後可以建立貼文，其中點擊「新增到串文」，會多出一個 textarea，如果一次發佈多個貼文，貼文的 parentId 會設為上一篇貼文(如果沒有 parent 就是 null)

![createpost](https://github.com/user-attachments/assets/57ba69a0-7b23-47f8-b133-65124f1a7032)

![createpost_DB](https://github.com/user-attachments/assets/86eb290f-e7d3-458b-89d8-7240fbce6188)

#### 瀏覽貼文

threads 有許多顯示貼文的方式(為您推薦、追蹤中、已說讚、已儲存)

目前在首頁直接顯示所有貼文，其中回覆的數量包含「直接」回覆和「間接」回覆，也就是上圖的第二及第三貼文，都算是第一篇文的回覆

![allposts](https://github.com/user-attachments/assets/98e9b30d-274f-444c-934e-9b513af60a0f)

特定貼文的顯示方式:

(下圖為 threads 隨機複製一篇串文的內容)

當點擊任意一篇貼文，會顯示他的 parent 並遞迴查詢，直到 parent_id 為 null，也就是首頁的貼文。

以圖片舉例，紅點表示目前的貼文，回覆「世界杯」這則貼文，「世界杯」則回覆「足球的最高殿堂......」這則貼文，

黃點則代表對紅點這篇貼文的「直接」回覆 (也可能有多筆)

![nested-posts](./public/readme/nested-posts.png)

### 下一步

接下來會繼續完成「回覆特定貼文」，可能順便完成 Like 的功能
