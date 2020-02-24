const express = require('express')
const bodyParser = require('body-parser')


// サーバサイドの作成
const app = express()
const port = 3001

// ミドルウェアのセットアップ。データを分かる形に解読してくれる。
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// getリクエスト
app.get("/api", (req, res)=>{
    res.json({
        msg: "getしましたね"
    })
})

// postリクエスト
app.post("/api", (req, res)=>{
    console.log(req.body)
    res.json({
        msg: `${req.body.title}をPOSTしましたね`
    })

})


// サーバの起動中の処理
app.listen(port, err=>{
    if (err) throw new Error(err)
    console.log(`listen on port ${port}`)
})




