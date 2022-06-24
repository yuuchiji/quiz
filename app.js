



// 素材
// document 表示しているページ全体のオブジェクト
// getElementsByTagName  HTMLの何かを指定・参照したいときに使う

const quiz =[
    {
        question :'私の一番好きな食べ物は次の内どれでしょう？',
        answers : ['パスタ','オムライス','焼き鳥','イチゴ'],
        correct :'オムライス'
    },
    {
        question :'私の好きな花はなんでしょう',
        answers :['桜','マリーゴールド','ひまわり','紫陽花'],
        correct :'ひまわり'
    },
    {
        question :'私のお父さんの名前はなんでしょう',
        answers :['たけし','ひろし','さとし','あつし'],
        correct :'ひろし'
    }

];



const quizLength= quiz.length;

let quizIndex = 0;





// idはページ内に1つしか存在できない。
// 2つ以上になるとエラーが起きてしまう。

// textContent = HTMLタグが持っているテキスト情報を取得することができるコンテント




// $マークをつけるとHTMLのオブジェクトが入っていることがわかりやすい
const $button = document.getElementsByTagName('button');

const buttonLength = $button.length ;


// const buttonLength = $button.length;



// クイズの問題文、選択肢を定義
const setupQuiz = () => {
    
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    
    let buttonIndex = 0;

    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }

}

setupQuiz();
// console.log('Run setupQuiz');






// ボタンをクリックしたら正誤判定
// window　ブラウザ全体から何か撮ってきたいときに使うオブジェクト
// addEventListener 引数を二つ指定できる

// $button[0].addEventListener('click', () =>{
//     if(correct === $button[0].textContent){
//         window.alert('正解！');
//     }else{
//         window.alert('不正解！');
//     }
// });

// このボタンがクリックされたタイミングで、
// 上の関数（ここでいうとIF文）が実行される


// event ユーザーがユーザーがアクションをしたタイミングで何かをしたいときに使う


// e.target クリックされた要素に対して何かしたい時は対して何かしたいときに使う



const clickHandler = (e) => {

    // console.log(e.target);
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert('正解！');
    }else{
        window.alert('不正解！');
    }

    quizIndex++;

    if(quizIndex < quizLength){
    // 問題数がまだあればこちらを実行
        setupQuiz();

    }else{
    //問題数がもうなければこちらを実行
        window.alert('終了！'); 
    }
};

let handlerIndex =0;
console.log(quiz[quizIndex])

while( handlerIndex < buttonLength){
    // console.log($button[handlerIndex]);

    $button[handlerIndex].addEventListener('click', (e) =>{
        clickHandler(e);
    });
    handlerIndex++
}
