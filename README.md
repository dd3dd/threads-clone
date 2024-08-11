# threads-clone
盡可能實現threads網頁版的功能及外觀，練習前後端開發技能


### Framework & Library & Tool
Next.js, Tailwind CSS, NextAuth.js, Prisma, Supabase

### 目前功能
#### 登入
(Instagram API似乎無法用於驗證，因此改用GitHub)
![login](https://github.com/user-attachments/assets/249eefe5-224d-44bc-936a-b9d22f229006)

若是初次登入的使用者，會在Supabase新增該使用者的資料
![userinfo](https://github.com/user-attachments/assets/5afd1e1a-7061-4f42-9498-1bb88f9f9658)

#### 建立貼文
登入後可以建立貼文，其中點擊「新增到串文」，會多出一個textarea，如果一次發佈多個貼文，貼文的parentId會設為上一篇貼文(如果沒有parent就是null)
![createpost](https://github.com/user-attachments/assets/57ba69a0-7b23-47f8-b133-65124f1a7032)
![createpost_DB](https://github.com/user-attachments/assets/86eb290f-e7d3-458b-89d8-7240fbce6188)

#### 瀏覽貼文
threads有許多顯示貼文的方式(為您推薦、追蹤中、已說讚、已儲存)
目前先直接顯示所有貼文，其中回覆的數量包含「直接」回覆和「間接」回覆，也就是上圖的第二及第三貼文，都算是第一篇文的回覆
![allposts](https://github.com/user-attachments/assets/98e9b30d-274f-444c-934e-9b513af60a0f)

### 下一步
接下來會繼續完成「點擊進入到特定貼文」，會顯示該貼文的所有回覆內容，而不只是數量。
以及「回覆特定貼文」









