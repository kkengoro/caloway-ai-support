export const fields = [
  {
    "key": "business",
    "label": "どのようなジム・指導サービスですか？",
    "type": "radio",
    "required": true,
    "options": [
      "パーソナルジム",
      "ピラティス・ヨガスタジオ",
      "総合ジム・フィットネスクラブ",
      "個人・出張トレーナー",
      "オンライン指導",
      "開業準備中",
      "その他"
    ]
  },
  {
    "key": "role",
    "label": "あなたのお立場を教えてください。",
    "type": "radio",
    "options": [
      "経営者・代表",
      "店長・マネージャー",
      "トレーナー・インストラクター",
      "その他"
    ]
  },
  {
    "key": "members",
    "label": "食事サポートの対象となる人数はどのくらいですか？",
    "help": "現在または今後の想定でお答えください。",
    "type": "radio",
    "required": true,
    "options": [
      "0人・未定",
      "1〜10人",
      "11〜30人",
      "31〜50人",
      "51〜100人",
      "101人以上"
    ]
  },
  {
    "key": "support",
    "label": "現在、食事サポートを行っていますか？",
    "type": "radio",
    "required": true,
    "options": [
      "通常の会費に含めて提供",
      "別料金で提供",
      "必要なときだけ対応",
      "今後提供したい",
      "提供する予定はない"
    ]
  },
  {
    "key": "tools",
    "label": "今は、どのように記録を受け取っていますか？",
    "type": "check",
    "options": [
      "LINE・DM",
      "メール",
      "紙・口頭",
      "スプレッドシート",
      "食事記録アプリ",
      "専用の会員管理システム",
      "受け取っていない",
      "その他"
    ],
    "exclusive": "受け取っていない"
  },
  {
    "key": "time",
    "label": "1人あたりの食事確認・返信に、週どれくらいかかりますか？",
    "type": "radio",
    "options": [
      "5分未満",
      "5〜15分",
      "16〜30分",
      "31〜60分",
      "60分を超える",
      "対応していない・分からない"
    ]
  },
  {
    "key": "challenges",
    "label": "特に困っていることは何ですか？",
    "help": "優先度の高いものを3つまで選んでください。",
    "type": "check",
    "required": true,
    "maxChoices": 3,
    "options": [
      "記録や写真が散らばる",
      "確認・返信に時間がかかる",
      "会員が記録を続けにくい",
      "前回の指導内容を追いにくい",
      "複数スタッフで情報を共有しにくい",
      "変化を説明する資料づくり",
      "導入費用・会員の負担",
      "特に困っていない",
      "その他"
    ],
    "exclusive": "特に困っていない"
  },
  {
    "key": "problem_detail",
    "label": "最近困った場面があれば、教えてください。",
    "type": "text",
    "maxLength": 800,
    "help": "任意。具体例があると開発の参考になります。会員の個人情報は書かないでください。"
  },
  {
    "key": "ideal",
    "label": "どんなサービスがあれば活用したいですか？",
    "type": "text",
    "maxLength": 800,
    "help": "任意。CaloWayの機能案に限らず、自由にお聞かせください。"
  },
  {
    "key": "features",
    "label": "CaloWayで使いたい機能はありますか？",
    "type": "check",
    "required": true,
    "maxChoices": 3,
    "help": "3つまで。すべて企画段階の機能案です。",
    "options": [
      "食事写真・カロリー・PFCの一覧",
      "体重の推移・グラフ",
      "週次AIレポート",
      "前回の目標・指導メモの引き継ぎ",
      "会員向けコメントの下書き",
      "記録が途切れた会員の把握",
      "歩数の共有",
      "スタッフ間の担当者共有",
      "PDF・データ書き出し",
      "今は必要ない",
      "その他"
    ],
    "exclusive": "今は必要ない"
  },
  {
    "key": "interest",
    "label": "この企画を、どの程度使ってみたいと思いますか？",
    "type": "radio",
    "required": true,
    "options": [
      "ぜひ試してみたい",
      "条件が合えば試したい",
      "判断する情報が足りない",
      "あまり使いたくない",
      "使う予定はない"
    ]
  },
  {
    "key": "pricing",
    "label": "この予定価格を見て、どう感じますか？",
    "type": "radio",
    "required": true,
    "options": [
      "利用を検討できる",
      "機能・効果を確認してから判断したい",
      "高いと感じる",
      "少人数向けのプランがほしい",
      "料金に関係なく今は必要ない",
      "分からない"
    ]
  },
  {
    "key": "plan",
    "label": "検討するとしたら、どの人数枠ですか？",
    "type": "radio",
    "options": [
      "30人まで：月9,800円",
      "100人まで：月16,800円",
      "30人より少ない枠",
      "100人より多い枠",
      "利用を検討していない・未定"
    ]
  },
  {
    "key": "barriers",
    "label": "使うために必要な条件や、不安なことを教えてください。",
    "type": "text",
    "maxLength": 800,
    "help": "任意。価格、操作、会員への説明、他ツールとの連携など、率直にお聞かせください。"
  },
  {
    "key": "gym_name",
    "label": "店舗名・屋号",
    "type": "short",
    "maxLength": 120
  },
  {
    "key": "name",
    "label": "お名前",
    "type": "short",
    "maxLength": 80
  },
  {
    "key": "email",
    "label": "メールアドレス",
    "type": "email",
    "maxLength": 254
  },
  {
    "key": "instagram",
    "label": "Instagramのユーザー名",
    "type": "short",
    "maxLength": 80
  }
];
export function validateAnswers(input) {
 const issues=[];const answers={};
 if(!input||typeof input!=='object'||Array.isArray(input)) return {issues:[{key:'form',message:'回答形式を確認してください。'}],answers};
 for(const f of fields){let v=input[f.key];
  if(f.type==='check'){
   if(v===undefined)v=[];
   if(!Array.isArray(v)||v.some(x=>typeof x!=='string'||!f.options.includes(x))||new Set(v).size!==v.length){issues.push({key:f.key,message:f.label+' 選択内容を確認してください。'});continue;}
   if(f.required&&!v.length)issues.push({key:f.key,message:f.label+' 1つ以上選んでください。'});
   if(v.length>(f.maxChoices||f.options.length))issues.push({key:f.key,message:f.label+' '+f.maxChoices+'つまで選んでください。'});
   if(f.exclusive&&v.includes(f.exclusive)&&v.length>1)issues.push({key:f.key,message:'「'+f.exclusive+'」は単独で選んでください。'});
  }else{
   if(v===undefined)v='';
   if(typeof v!=='string'){issues.push({key:f.key,message:'入力内容を確認してください。'});continue;}
   v=v.trim();
   if(f.required&&!v)issues.push({key:f.key,message:f.label+' 選んでください。'});
   if(f.options&&v&&!f.options.includes(v))issues.push({key:f.key,message:'選択内容を確認してください。'});
   if(v.length>(f.maxLength||200))issues.push({key:f.key,message:f.label+' 文字数を減らしてください。'});
   if(f.type==='email'&&v&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v))issues.push({key:f.key,message:'メールアドレスの形式を確認してください。'});
   if(f.key==='instagram'&&v&&!/^@?[a-zA-Z0-9._]{1,30}$/.test(v))issues.push({key:f.key,message:'InstagramはURLではなくユーザー名を入力してください。'});
  }answers[f.key]=v;
 }
 for(const k of ['interview','updates','privacy']){
  const v=input[k];if(v!==undefined&&typeof v!=='boolean')issues.push({key:k,message:'同意の選択を確認してください。'});
  answers[k]=v===true;
 }
 if(!answers.privacy)issues.push({key:'privacy',message:'回答の取り扱いを確認してください。'});
 if((answers.interview||answers.updates)&&!answers.email&&!answers.instagram)issues.push({key:'email',message:'連絡を希望する場合は、メールまたはInstagramのユーザー名を入力してください。'});
 return {issues,answers};
}
